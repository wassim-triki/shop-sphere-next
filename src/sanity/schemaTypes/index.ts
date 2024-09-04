import { type SchemaTypeDefinition } from "sanity";
import productType from "../schemas/product";
import categoryType from "../schemas/category";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],
};
