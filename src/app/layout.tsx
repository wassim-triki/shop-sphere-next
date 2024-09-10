import "~/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar";
import CartProvider from "~/providers/cart";
import CartSheet from "~/components/CartSheet";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AdBanner from "~/components/AdBanner";
import Footer from "~/components/Footer";
import config from "~/config";

// Import Josefin Sans
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // You can specify other subsets if needed
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: {
    default: config.site.name,
    template: "%s | " + config.site.name,
  },
  description: config.site.description,
  twitter: {
    card: "summary_large_image",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${josefinSans.variable}`}>
      <body>
        <CartProvider>
          <CartSheet />
          <Navbar />
          {children}
          <AdBanner />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
