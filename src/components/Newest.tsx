import React from "react";
import ProductCatalog from "./ProductCatalog";
import { getProducts } from "~/app/catalog/page";

async function Newest() {
  const data = await getProducts();
  return <ProductCatalog title="Our Newest Products" initProducts={data} />;
}

export default Newest;
