"use client";
import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
import config from "~/config";
function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={config.stripe.key}
      successUrl={`${config.baseURL}/stripe/success`}
      cancelUrl={`${config.baseURL}/stripe/error`}
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
