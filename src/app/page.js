import Image from "next/image";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import ShippingSection from "./components/ShippingSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ShippingSection/>
      <Brand/>
    </div>
  );
}
