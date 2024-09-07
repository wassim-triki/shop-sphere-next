import { defineQuery } from "groq";
import { DEFAULT_LIMIT } from "~/data";
import { client } from "~/sanity/lib/client";
import { Product } from "~/types";

// Fetch products, paginated by _createdAt
export async function getProducts(lastCreatedAt = "") {
  const NEWEST_PRODUCTS_QUERY = defineQuery(`*[_type == 'product' ${
    lastCreatedAt ? `&& _createdAt > $lastCreatedAt` : ""
  }] | order(_createdAt asc)[0...$limit] {
    _id,
    price,
    title,
    sale,
    "slug": slug.current,
    "categoryName": category->name,
    "thumbnailUrl": images[0].asset->url
  }`);

  const data = await client.fetch<Product[]>(NEWEST_PRODUCTS_QUERY, {
    lastCreatedAt,
    limit: DEFAULT_LIMIT, // 4 products per fetch
  });

  return data;
}

export async function getProductsByCategory(
  category: string,
  lastCreatedAt = "",
) {
  // Build the query string conditionally to handle pagination
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`*[_type == 'product' 
    && lower(category->name) == lower($category) 
    ${lastCreatedAt ? `&& _createdAt > $lastCreatedAt` : ""}] 
    | order(_createdAt asc)[0...$limit] {
      _id,
      price,
      title,
      sale,
      "slug": slug.current,
      "categoryName": category->name,
      "thumbnailUrl": images[0].asset->url
  }`);

  const data = await client.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, {
    category,
    lastCreatedAt,
    limit: DEFAULT_LIMIT, // Fetch 4 products per request
  });

  return data;
}
