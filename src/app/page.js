import Image from "next/image";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import ShippingSection from "./components/ShippingSection";
import ShopBanner from "./components/ShopBanner";
import DiscountBanner from "./components/DiscountBanner";
import DayOfTheDeal from "./components/DayOfTheDeal";
import Fresh from "./components/Fresh";
import NewArrivals from "./components/NewArrivals";
import TopVendors from "./components/TopVendors";
import Testimonials from "./components/Testimonials";
import InstaSection from "./components/InstaSection";



export default function Home() {
  return (
    <div className="bg-[#e5e7eb]">
      <Banner/>
      <DiscountBanner/>
      <DayOfTheDeal/>
      <ShopBanner/>
      <Fresh/>
      <NewArrivals/>
      <ShippingSection/>
      <TopVendors/>
      <Testimonials/>
      <InstaSection/>
      <Brand/>
    </div>
  );
}
