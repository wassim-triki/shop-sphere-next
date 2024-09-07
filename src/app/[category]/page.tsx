import { defineQuery } from "groq";
import React from "react";
import ProductCatalog from "~/components/ProductCatalog";
import { DEFAULT_LIMIT } from "~/data";
import { capitalize } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import product from "~/sanity/schemas/product";
import { Product } from "~/types";

export async function getProductsByCategory(
  category: string,
  lastCreatedAt = "",
) {
  // Build the query string conditionally to handle pagination
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`*[_type == 'product' 
    && lower(category->name) == lower($category) 
    ${lastCreatedAt ? `&& _createdAt > $lastCreatedAt` : ""}] 
    | order(_createdAt asc)[0...$limit] {
      _id,
      price,
      title,
      sale,
      "slug": slug.current,
      "categoryName": category->name,
      "thumbnailUrl": images[0].asset->url
  }`);

  const data = await client.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, {
    category,
    lastCreatedAt,
    limit: DEFAULT_LIMIT, // Fetch 4 products per request
  });

  return data;
}

async function getProductsCountByCategory(category: string) {
  const PRODUCT_COUNT_BY_CATEGORY_QUERY = `count(*[_type == "product" && lower(category->name) == lower($category)])`;
  const data = await client.fetch<number>(PRODUCT_COUNT_BY_CATEGORY_QUERY, {
    category,
  });
  return data;
}

type Props = {
  params: {
    category: string;
  };
};

async function CategoryPage({ params: { category } }: Props) {
  const data = await getProductsByCategory(category);
  const total = await getProductsCountByCategory(category);
  return (
    <ProductCatalog
      title={`Our Products For ${capitalize(category)}`}
      total={total}
      initProducts={data}
    />
  );
}

export default CategoryPage;
