import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "~/types";

type Props = {
  products: Product[];
};
function ProductList({ products }: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
