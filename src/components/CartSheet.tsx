"use client";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useEffect, useState } from "react";
import Image from "next/image";
import QuantitySelector from "./ui/quantity-selector";
import { Trash, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { formatCurrency } from "~/lib/utils";

export default function CartSheet() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    addItem,
    removeItem,
    decrementItem,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet
      // open={true}
      open={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}
    >
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>
            Shopping Cart{" "}
            {cartCount && cartCount > 0 ? (
              <span className="text-muted-foreground">
                ({Object.values(cartDetails ?? {}).length})
              </span>
            ) : (
              ""
            )}
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            {cartCount === 0 ? (
              <div className="flex h-full items-center justify-center">
                <h3 className="py-6 text-xl font-normal text-muted-foreground">
                  You don&apos;t have any items yet.
                </h3>
              </div>
            ) : (
              <ul className="-my-4 divide-y divide-gray-200">
                {Object.values(cartDetails ?? {}).map((cartItem) => (
                  <li key={cartItem.id} className="flex flex-col gap-2 py-4">
                    <div className="flex w-full">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={cartItem.image!}
                          alt={cartItem.name}
                          width={100}
                          height={100}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <span className="text-sm font-normal text-muted-foreground">
                            {
                              (
                                cartItem?.product_data as {
                                  categoryName: string;
                                }
                              )?.categoryName
                            }
                          </span>
                          <p className="ml-4 font-semibold text-primary">
                            ${cartItem.price}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="sm:text-lg">{cartItem.name}</h4>
                          <p className="mt-2 line-clamp-1 text-sm text-muted-foreground sm:line-clamp-2">
                            {cartItem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <QuantitySelector
                        quantity={cartItem.quantity}
                        onAdd={() =>
                          addItem(cartItem, {
                            count: 1,
                          })
                        }
                        onRemove={() =>
                          decrementItem(cartItem.id, { count: 1 })
                        }
                      />
                      <Button
                        className="rounded-md border-[1px] border-destructive bg-white text-destructive hover:bg-destructive hover:text-white"
                        size={"icon"}
                        onClick={() => removeItem(cartItem.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {!cartCount ? "" : <SheetFooter total={totalPrice || 0} />}
        </div>
      </SheetContent>
    </Sheet>
  );
}

type SheetFooterProps = {
  total: number;
};

function SheetFooter({ total }: SheetFooterProps) {
  const [formattedSubtotal, setFormattedSubtotal] = useState(total?.toString());
  const { handleCartClick } = useShoppingCart();

  useEffect(() => {
    if (total) {
      setFormattedSubtotal(
        formatCurrency({
          amount: total,
          currency: "USD",
          locale: "en-US",
        }),
      );
    }
  }, [total]);
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <Separator className="" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formattedSubtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-muted-foreground">--</span>
        </div>
      </div>
      <Separator className="" />
      <div className="flex justify-between">
        <span className="text-muted-foreground">Total</span>
        <span>{formattedSubtotal}</span>
      </div>

      <div className="mb-7 flex flex-col gap-3 sm:gap-5">
        <Button size={"lg"} className="w-full text-base">
          Checkout
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">OR</span>
          </div>
        </div>
        <Button
          onClick={() => handleCartClick()}
          size={"lg"}
          variant={"outline"}
          className="w-full text-base"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
