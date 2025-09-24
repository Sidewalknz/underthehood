import products from "@/data/products.json";
import { redirect } from "next/navigation";

export default function ShopIndex() {
  const first = (products as any[])[0];
  redirect(`/shop/${first?.id ?? ""}`);
}
