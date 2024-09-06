import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductList from "./ProductList";
import { Product } from "~/types";

type Props = {
  title: string;
  products: Product[];
};
const ProductCatalog = ({ title, products }: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>

          <Link className="text-primary" href={"/products"}>
            <div className="flex items-center gap-x-1">
              <span className="mt-[3px]">See All</span>
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>
        </div>

        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductCatalog;
