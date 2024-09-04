import { type SchemaTypeDefinition } from "sanity";
import productType from "../schemas/product";
import categoryType from "../schemas/category";
import heroImagesType from "../schemas/heroImages";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, heroImagesType],
};
