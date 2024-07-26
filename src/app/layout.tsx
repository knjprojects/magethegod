import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog With Mage",
  description: "Blog With Mage",
};
import localFont from "next/font/local";

const rustic = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Glametrix.otf",
      weight: "200",
    },
  ],
  variable: "--font-glametrix",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
