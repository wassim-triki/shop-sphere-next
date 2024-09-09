"use client";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import QuantitySelector from "~/components/ui/quantity-selector";
import { CartProduct } from "~/types";

type Props = {
  cartProduct: CartProduct;
};

function AddToCartButtons({ cartProduct }: Props) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [count, setCount] = useState(1); // State is managed here

  const handleQuantityChange = (newQuantity: number) => {
    setCount(newQuantity); // Update the state when quantity changes
  };

  return (
    <div className="flex items-center gap-2">
      <QuantitySelector
        quantity={count} // Pass the controlled quantity to QuantitySelector
        onChange={handleQuantityChange} // Handle any other changes
      />
      <Button
        onClick={() => {
          addItem(
            { ...cartProduct, id: cartProduct.price_id },
            {
              count: count,
            },
          );
          handleCartClick();
        }}
      >
        Add to cart
      </Button>
      {/* <Button variant={"secondary"}>Check out now</Button> */}
    </div>
  );
}

export default AddToCartButtons;
