import Hero from "./components/Hero";
import Services from "./components/Services";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />         {/* Normal divider */}
      <Services />
      <Divider flip />    {/* Flipped divider */}
      {/* Other sections */}
    </>
  );
}
