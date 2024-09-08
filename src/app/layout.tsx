import "~/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar";
import CartProvider from "~/providers/cart";

// Import Josefin Sans
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // You can specify other subsets if needed
  variable: "--font-josefin-sans",
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${josefinSans.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
