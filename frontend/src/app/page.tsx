import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Services />
      <Divider flip />
      <Products />
      <Divider />
      <About />
      <Divider flip />
      <CTA />
    </>
  );
}
