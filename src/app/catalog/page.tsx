import { defineQuery } from "groq";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import { getProducts, getProductsCount } from "~/actions";
import ProductCatalog from "~/components/ProductCatalog";
import { Button } from "~/components/ui/button";
import { DEFAULT_LIMIT } from "~/data";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

export const metadata: Metadata = {
  title: {
    default: "Catalog",
    template: "%s | Catalog",
  },
};

async function CatalogPage() {
  const data = await getProducts();
  const total = await getProductsCount();

  return (
    <ProductCatalog title="Our Products" total={total} initProducts={data} />
  );
}

export default CatalogPage;
