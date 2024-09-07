import { defineQuery } from "groq";
import React from "react";
import { getProductsByCategory } from "~/actions";
import ProductCatalog from "~/components/ProductCatalog";
import { DEFAULT_LIMIT } from "~/data";
import { capitalize } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

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
