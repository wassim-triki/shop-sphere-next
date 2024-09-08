"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "./button";
import { useEffect } from "react";

interface QuantitySelectorProps {
  quantity: number; // Now, the quantity is fully controlled by the parent
  minQuantity?: number;
  maxQuantity?: number;
  onAdd?: (newQuantity: number) => void;
  onRemove?: (newQuantity: number) => void;
  onChange?: (newQuantity: number) => void;
}

export default function QuantitySelector({
  quantity,
  minQuantity = 1,
  maxQuantity = 100,
  onAdd,
  onRemove,
  onChange,
}: QuantitySelectorProps) {
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onAdd?.(quantity + 1); // Notify parent component to update
      onChange?.(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      onRemove?.(quantity - 1); // Notify parent component to update
      onChange?.(quantity - 1);
    }
  };

  return (
    <div className="flex w-24 items-center overflow-hidden rounded-md border border-gray-300">
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
