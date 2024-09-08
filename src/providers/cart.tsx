"use client";
import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/cancel"
      currency="usd"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default CartProvider;
