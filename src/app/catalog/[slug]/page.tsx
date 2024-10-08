import { defineQuery } from "groq";
import { Minus, Plus, Star, Truck } from "lucide-react";
import React from "react";
import { getProductDetails } from "~/actions";
import AddToCartButtons from "~/components/AddToCartButtons";
import ImageGallery from "~/components/ImageGallery";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import QuantitySelector from "~/components/ui/quantity-selector";
import { Separator } from "~/components/ui/separator";
import StarRating from "~/components/ui/star-rating";
import { client } from "~/sanity/lib/client";
import { urlFor } from "~/sanity/lib/image";
import product from "~/sanity/schemas/product";
import { ProductDetail } from "~/types";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProdcutPage({ params: { slug } }: Props) {
  const data = await getProductDetails(slug);
  const cartProduct = {
    name: data.name,
    description: data.description,
    price: data.price,
    currency: "USD",
    image: data.images[0]!,
    price_id: data.price_id,
    product_data: {
      categoryName: data.categoryName,
    },
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <ImageGallery images={data.images} onSale={data.sale?.isActive} />

          <div className="flex flex-col gap-5 md:py-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
              <span className="inline-block text-gray-500">
                {data.categoryName}
              </span>

              <div className="mt-1 flex items-center gap-2">
                <StarRating rating={data.rating} className="h-5 w-5" />
                <span className="mt-0.5 text-lg text-gray-900">
                  ({data?.rating})
                </span>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="inline-block text-2xl font-semibold text-primary">
                  ${data.sale?.salePrice || data.price}
                </span>

                {data.sale?.salePrice && (
                  <span className="text-gray-500 line-through">
                    ${data.price}
                  </span>
                )}
                <span className="mt-0.5 text-sm text-muted-foreground">
                  Incl. Vat plus shipping
                </span>
              </div>

              <div className="mt-0.5 flex items-center gap-2 text-muted-foreground">
                <Truck className="h-5 w-5" />
                <span className="mt-0.5">
                  {data.dayShipping.min}-{data.dayShipping.max} Day shipping
                </span>
              </div>
            </div>

            <Separator />
            <AddToCartButtons cartProduct={cartProduct} />
            <Separator />
            <div className="text-muted-foreground">{data?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
