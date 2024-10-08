"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { NavLink, navLinks } from "~/data";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <header className="mb-4 border-b md:mb-8">
      <div className="mx-auto flex max-w-2xl items-center justify-between pl-4 sm:pl-6 lg:max-w-7xl">
        <Link href={"/"} className="flex items-center gap-3">
          <Image alt="favicon" width={40} height={40} src={"/favicon.ico"} />
          <div className="mt-3">
            <h1 className="text-2xl font-bold md:text-4xl">
              Shop<span className="text-primary">Sphere</span>
            </h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((navLink) => (
            <NavLinkItem key={navLink.name} navLink={navLink} />
          ))}
        </nav>

        <div className="flex">
          <Button
            onClick={() => handleCartClick()}
            variant={"outline"}
            className="relative flex h-14 w-14 flex-col gap-y-1.5 rounded-none border-b-0 text-muted-foreground sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <div className="relative flex flex-col gap-1.5">
              {cartCount! > 0 && (
                <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
              <ShoppingBag />
              <span className="hidden text-xs font-semibold sm:block">
                Cart
              </span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}

type NavLinkItemProps = {
  navLink: NavLink;
};
function NavLinkItem({ navLink }: NavLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === navLink.href;
  if (isActive)
    return (
      <div>
        <Link className="font-semibold text-primary" href={navLink.href}>
          {navLink.name.toUpperCase()}
        </Link>
      </div>
    );
  return (
    <div>
      <Link
        className="font-semibold text-gray-600 transition duration-100 hover:text-primary"
        href={navLink.href}
      >
        {navLink.name.toUpperCase()}
      </Link>
    </div>
  );
}
