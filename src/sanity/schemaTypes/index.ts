import { type SchemaTypeDefinition } from "sanity";
import productType from "../schemas/product";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
};
