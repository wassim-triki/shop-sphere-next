import { defineQuery } from "groq";
import React from "react";
import { getProductsByCategory, getProductsCountByCategory } from "~/actions";
import ProductCatalog from "~/components/ProductCatalog";
import { DEFAULT_LIMIT } from "~/data";
import { capitalize } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

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
