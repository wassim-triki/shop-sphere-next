export type Product = {
  _id: string;
  price: number;
  title: string;
  sale?: { isActive: boolean; salePrice: number };
  slug: string;
  categoryName: string;
  thumbnailUrl: string;
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
