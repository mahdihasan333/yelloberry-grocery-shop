import Image from "next/image";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import ShippingSection from "./components/ShippingSection";
import ShopBanner from "./components/ShopBanner";
import DiscountBanner from "./components/DiscountBanner";
import DayOfTheDeal from "./components/DayOfTheDeal";
import Fresh from "./components/Fresh";

export default function Home() {
  return (
    <div>
      <Banner/>
      <DiscountBanner/>
      <DayOfTheDeal/>
      <ShopBanner/>
      <Fresh/>
      <ShippingSection/>
      <Brand/>
    </div>
  );
}
