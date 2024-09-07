"use client";

import React, { useState } from "react";
import { ArrowRight, MoveRight, RotateCcw, RotateCw } from "lucide-react";
import Link from "next/link";
import ProductList from "./ProductList";
import { Product } from "~/types";
import { Button } from "./ui/button";
import { CATEGORY_MAPPING, DEFAULT_LIMIT } from "~/data";
import { usePathname } from "next/navigation";
import { getProducts, getProductsByCategory } from "~/actions";

type Props = {
  title: string;
  initProducts: Product[];
  total?: number;
};

const ProductCatalog = ({ title, initProducts, total = 0 }: Props) => {
  const [products, setProducts] = useState<Product[]>([...initProducts]);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const category = CATEGORY_MAPPING[pathname as keyof typeof CATEGORY_MAPPING]; // Get the category from the path

  const canLoadMore = products.length < total;

  const loadMore = async () => {
    try {
      setLoading(true);
      const lastCreatedAt = products[products.length - 1]?._createdAt; // Get the last product's _createdAt field

      // If category is present in the path, fetch products by category, otherwise fetch normally
      const newProducts = category
        ? await getProductsByCategory(category, lastCreatedAt)
        : await getProducts(lastCreatedAt);

      setProducts((prev) => [...prev, ...newProducts]); // Append the new products
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>

          {pathname !== "/catalog" && (
            <Link className="text-primary" href={"/products"}>
              <div className="flex items-center gap-x-1">
                <span className="mt-[3px]">See All</span>
                <MoveRight className="h-6 w-6" />
              </div>
            </Link>
          )}
        </div>

        <ProductList products={products} />
        <div className="mt-8 flex justify-center">
          {pathname === "/" ? (
            <Link href={"/catalog"}>
              <Button className="mx-auto flex items-center gap-2">
                More <MoveRight className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Button
              onClick={loadMore}
              disabled={!canLoadMore || loading}
              className="mx-auto flex items-center gap-1"
            >
              {loading ? (
                <>
                  <RotateCw className="h-4 w-4 animate-spin" /> Loading...
                </>
              ) : (
                <span>{canLoadMore ? "Load More" : "No More Products"}</span>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
