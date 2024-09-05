/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type HeroImages = {
  _id: string;
  _type: "heroImages";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image1?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  image2?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  price?: number;
  description?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  dayShipping?: {
    min?: number;
    max?: number;
  };
  rating?: number;
  sale?: {
    isActive?: boolean;
    salePrice?: number;
  };
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  description?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | HeroImages
  | Product
  | Category
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../components/Hero.tsx
// Variable: HERO_IMAGES_QUERY
// Query: *[_type == 'heroImages']
export type HERO_IMAGES_QUERYResult = Array<{
  _id: string;
  _type: "heroImages";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image1?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  image2?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
}>;

// Source: ../components/Newest.tsx
// Variable: NEWEST_PRODUCTS_QUERY
// Query: *[_type == 'product']|order(_createdAt desc)[0...$count] {  _id,    price,    title,    sale,    "slug":slug.current,    "categoryName":category->name,    "thumbnailUrl":images[0].asset->url}
export type NEWEST_PRODUCTS_QUERYResult = Array<{
  _id: string;
  price: number | null;
  title: string | null;
  sale: {
    isActive?: boolean;
    salePrice?: number;
  } | null;
  slug: string | null;
  categoryName: string | null;
  thumbnailUrl: string | null;
}>;

// Source: ../app/product/[slug]/page.tsx
// Variable: PRODUCT_DETAILS_QUERY
// Query: *[_type == 'product' && slug.current == $slug ][0]{  _id,  title,    images,    price,    title,    dayShipping,    rating,    sale,    description,    "slug":slug.current,    "categoryName":category->name}
export type PRODUCT_DETAILS_QUERYResult = {
  _id: string;
  title: string | null;
  images: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  price: number | null;
  dayShipping: {
    min?: number;
    max?: number;
  } | null;
  rating: number | null;
  sale: {
    isActive?: boolean;
    salePrice?: number;
  } | null;
  description: string | null;
  slug: string | null;
  categoryName: string | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == 'heroImages']": HERO_IMAGES_QUERYResult;
    '*[_type == \'product\']|order(_createdAt desc)[0...$count] {\n  _id,\n    price,\n    title,\n    sale,\n    "slug":slug.current,\n    "categoryName":category->name,\n    "thumbnailUrl":images[0].asset->url\n}': NEWEST_PRODUCTS_QUERYResult;
    '*[_type == \'product\' && slug.current == $slug ][0]{\n  _id,\n  title,\n    images,\n    price,\n    title,\n    dayShipping,\n    rating,\n    sale,\n    description,\n    "slug":slug.current,\n    "categoryName":category->name\n}': PRODUCT_DETAILS_QUERYResult;
  }
}
