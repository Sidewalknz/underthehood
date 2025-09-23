import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { Gaegu, Barlow_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: "Under The Hood BBQ",
  description: "Smoked to perfection",
};

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], 
  display: "swap",
  variable: "--font-barlow-condensed", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable}`}>
      <body className={gaegu.className}>
        <Navbar />
        {children}
        <Divider />
        <Footer /> 
      </body>
    </html>
  );
}
