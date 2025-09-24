import productsData from "@/data/products.json";
import { notFound, redirect } from "next/navigation";

type Product = {
  id: string;
  name: string;
  description?: string;
  image: string;
  thumbnail?: string;
  category?: string;
  price: number;
  colour?: string;
  ingredients?: string[];
  brandTitle?: string;
  brandSubtitle?: string;
  brandCategory?: string;
};

const PRODUCTS: Product[] = productsData as Product[];

export default function ShopPage() {
  const first = PRODUCTS[0];
  if (!first) return notFound();
  redirect(`/shop/${first.id}`);
}
