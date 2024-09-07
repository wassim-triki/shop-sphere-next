import { defineQuery } from "groq";
import Link from "next/link";
import React, { Suspense } from "react";
import ProductCatalog from "~/components/ProductCatalog";
import { Button } from "~/components/ui/button";
import { DEFAULT_LIMIT } from "~/data";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

// Fetch products, paginated by _createdAt
export async function getProducts(lastCreatedAt = "") {
  const NEWEST_PRODUCTS_QUERY = defineQuery(`*[_type == 'product' ${
    lastCreatedAt ? `&& _createdAt > $lastCreatedAt` : ""
  }] | order(_createdAt asc)[0...$limit] {
    _id,
    price,
    title,
    sale,
    "slug": slug.current,
    "categoryName": category->name,
    "thumbnailUrl": images[0].asset->url
  }`);

  const data = await client.fetch<Product[]>(NEWEST_PRODUCTS_QUERY, {
    lastCreatedAt,
    limit: DEFAULT_LIMIT, // 4 products per fetch
  });

  return data;
}

async function getProductsCount() {
  const PRODUCT_COUNT_QUERY = `count(*[_type == "product"])`;
  const data = await client.fetch<number>(PRODUCT_COUNT_QUERY);
  return data;
}

async function CatalogPage() {
  const total = await getProductsCount();
  const data = await getProducts(); // Initial fetch

  return (
    <ProductCatalog title="Our Products" total={total} initProducts={data} />
  );
}

export default CatalogPage;
