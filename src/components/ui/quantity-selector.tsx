"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "./button";

interface QuantitySelectorProps {
  initialQuantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  onChange?: (quantity: number) => void;
}

export default function Component({
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 100,
  onChange,
}: QuantitySelectorProps = {}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity((prev) => {
        const newQuantity = prev + 1;
        onChange?.(newQuantity);
        return newQuantity;
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        onChange?.(newQuantity);
        return newQuantity;
      });
    }
  };

  return (
    <div className="flex w-fit items-center overflow-hidden rounded-md border border-gray-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDecrement}
        disabled={quantity <= minQuantity}
        aria-label="Decrease quantity"
        className="h-9 w-9 rounded-none border-gray-300 text-muted-foreground"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <div className="w-fit px-2 pt-0.5 text-center text-xl text-gray-800">
        {quantity}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleIncrement}
        disabled={quantity >= maxQuantity}
        aria-label="Increase quantity"
        className="h-9 w-9 rounded-none border-gray-300 text-muted-foreground"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
