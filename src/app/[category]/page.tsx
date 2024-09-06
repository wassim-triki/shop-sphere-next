import { defineQuery } from "groq";
import React from "react";
import ProductCatalog from "~/components/ProductCatalog";
import { capitalize } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import product from "~/sanity/schemas/product";
import { Product } from "~/types";

async function getProductsByCategory(category: string) {
  const PRODUCTS_BY_CATEGORY_QUERY =
    defineQuery(`*[_type == 'product' && lower(category->name) == lower($category)]|order(_createdAt desc){
  _id,
    price,
    title,
    sale,
    "slug":slug.current,
    "categoryName":category->name,
    "thumbnailUrl":images[0].asset->url
}`);
  const data = await client.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, {
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
  return (
    <ProductCatalog
      title={`Our Products For ${capitalize(category)}`}
      products={data}
    />
  );
}

export default CategoryPage;
