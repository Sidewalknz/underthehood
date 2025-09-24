import productsData from "@/data/products.json";
import { redirect } from "next/navigation";

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

export default function ShopIndex() {
  const first = PRODUCTS[0];
  redirect(`/shop/${first?.id ?? ""}`);
}
