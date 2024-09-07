export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
];

export const CATEGORY_MAPPING = {
  "/men": "Men",
  "/women": "Women",
  "/kids": "Kids",
};

export const DEFAULT_LIMIT = 4;
export const PER_PAGE = 1;
export const DEFAULT_OFFSET = 0;
