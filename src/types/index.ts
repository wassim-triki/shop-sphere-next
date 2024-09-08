import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Product = {
  _id: string;
  price: number;
  title: string;
  sale?: { isActive: boolean; salePrice: number };
  slug: string;
  categoryName: string;
  thumbnailUrl: string;
  _createdAt: string;
};

export type ProductDetail = {
  _id: string;
  title: string;
  images: string[];
  price: number;
  dayShipping: { min: number; max: number };
  rating: number;
  sale?: { isActive: boolean; salePrice: number };
  description?: string;
  slug: string;
  categoryName: string;
};

export type HeroImages = {
  image1: SanityImageSource;
  image2: SanityImageSource;
};