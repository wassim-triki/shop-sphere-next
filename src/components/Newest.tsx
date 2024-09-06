import { defineQuery } from "groq";
import { ArrowRight } from "lucide-react";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "~/sanity/lib/client";
import ProductList from "./ProductList";
import ProductCatalog from "./ProductCatalog";
import { Product } from "~/types";

async function getNewestProducts(count = 4) {
  const NEWEST_PRODUCTS_QUERY =
    defineQuery(`*[_type == 'product']|order(_createdAt desc)[0...$count] {
  _id,
    price,
    title,
    sale,
    "slug":slug.current,
    "categoryName":category->name,
    "thumbnailUrl":images[0].asset->url
}`);
  const data = await client.fetch<Product[]>(NEWEST_PRODUCTS_QUERY, { count });
  return data;
}
async function Newest() {
  const data = await getNewestProducts();
  return <ProductCatalog title="Our Newest Products" products={data} />;
}

export default Newest;
