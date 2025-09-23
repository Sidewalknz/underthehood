import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Services from "./components/Services";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Services />
      <Divider flip />
      <Products />
    </>
  );
}
