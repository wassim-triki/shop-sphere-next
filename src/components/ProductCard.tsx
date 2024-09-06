import Image from "next/image";
import Link from "next/link";
import { Product } from "~/types";

type ProductCardProps = { product: Product };
function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
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
          src={product.thumbnailUrl}
          alt={product.title}
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
export default ProductCard;
