import { defineQuery } from "groq";
import { ArrowRight } from "lucide-react";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "~/sanity/lib/client";
import { NEWEST_PRODUCTS_QUERYResult } from "~/sanity/sanity.types";

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
  const data = await client.fetch(NEWEST_PRODUCTS_QUERY, { count });
  return data;
}
async function Newest() {
  const data = await getNewestProducts();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>

          <Link className="text-primary" href={"/all"}>
            <div className="flex items-center gap-x-1">
              <span className="mt-[3px]">See All</span>
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <NewestProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

type NewestProductProps = { product: NEWEST_PRODUCTS_QUERYResult[number] };
function NewestProduct({ product }: NewestProductProps) {
  return (
    <div key={product._id} className="group relative">
      {product.sale?.isActive && (
        <div className="absolute left-0 top-0 z-10 flex items-center justify-center p-4">
          <span className="uppesrcase rounded-md bg-primary px-3 pb-1 pt-[6px] text-xs text-white">
            SALE
          </span>
        </div>
      )}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 lg:h-80">
        <Image
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={product.thumbnailUrl ?? ""}
          alt={product.title ?? ""}
          width={300}
          height={300}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-gray-700">
            <Link href={`/product/${product.slug}`}>{product.title}</Link>
          </h3>
          <p className="font-semibold text-primary">
            ${product.sale?.salePrice ?? product.price}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
          {product.sale?.isActive && (
            <p className="text-gray-500 line-through">${product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Newest;
