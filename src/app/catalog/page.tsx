import { defineQuery } from "groq";
import Link from "next/link";
import React, { Suspense } from "react";
import { getProducts } from "~/actions";
import ProductCatalog from "~/components/ProductCatalog";
import { Button } from "~/components/ui/button";
import { DEFAULT_LIMIT } from "~/data";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

async function getProductsCount() {
  const PRODUCT_COUNT_QUERY = `count(*[_type == "product"])`;
  const data = await client.fetch<number>(PRODUCT_COUNT_QUERY);
  return data;
}

async function CatalogPage() {
  const data = await getProducts();
  const total = await getProductsCount();

  return (
    <ProductCatalog title="Our Products" total={total} initProducts={data} />
  );
}

export default CatalogPage;
