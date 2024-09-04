"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
type NavLink = {
  name: string;
  href: string;
};
const links: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="mx-auto flex max-w-2xl items-center justify-between pl-4 sm:pl-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold md:text-4xl">
            Shop<span className="text-primary">Sphere</span>
          </h1>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </nav>

        <div className="flex">
          <Button
            variant={"outline"}
            className="flex h-14 w-14 flex-col gap-y-1.5 rounded-none border-b-0 text-muted-foreground sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold sm:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

type NavLinkProps = {
  link: NavLink;
};
function NavLink({ link }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  if (isActive)
    return (
      <div>
        <Link className="text-lg font-semibold text-primary" href={link.href}>
          {link.name}
        </Link>
      </div>
    );
  return (
    <div>
      <Link
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
        href={link.href}
      >
        {link.name}
      </Link>
    </div>
  );
}
