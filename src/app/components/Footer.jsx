'use client';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";
import footerImage from '../assets/images/logo/dragon-fruit 1.png'

import playStore from '../assets/images/footer/Link → android.png.png'
import appStore from '../assets/images/footer/Link → apple.png.png'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="container mx-auto px-5 grid md:grid-cols-5 gap-8 pb-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src={footerImage} alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-bold text-xl">Yellow <span className="text-red-500">Berry</span></h2>
            </div>
          </div>
          <p className="mt-3 text-sm">
            BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
          </p>
          <div className="flex space-x-3 mt-4">
            <img src={playStore} alt="Google Play" className="w-32 cursor-pointer" />
            <img src={appStore} alt="App Store" className="w-32 cursor-pointer" />
          </div>
        </div>
        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <ul className="space-y-2 text-sm">
            {['Dairy & Milk', 'Snack & Spice', 'Fast Food', 'Juice & Drinks', 'Bakery', 'Seafood'].map((item, index) => (
              <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {['About us', 'Delivery', 'Legal Notice', 'Terms & conditions', 'Secure payment', 'Contact us'].map((item, index) => (
              <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        {/* Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            {['Sign In', 'View Cart', 'Return Policy', 'Become a Vendor', 'Affiliate Program', 'Payments'].map((item, index) => (
              <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="flex items-center space-x-2"><IoLocationSharp /> <span>971 Lajamni, Surat, Bharat</span></p>
          <p className="flex items-center space-x-2"><MdPhone /> <span>+00 9876543210</span></p>
          <p className="flex items-center space-x-2"><MdEmail /> <span>example@email.com</span></p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 flex flex-col md:flex-row justify-between items-center px-5 text-sm">
        <p>Copyright &copy; 2025 <span className="text-orange-500">BlackRise</span>. All rights reserved.</p>
        <div className="flex space-x-3 mt-2 md:mt-0">
          <img src="/visa.png" alt="Visa" className="w-10" />
          <img src="/mastercard.png" alt="MasterCard" className="w-10" />
          <img src="/paypal.png" alt="PayPal" className="w-10" />
          <img src="/skrill.png" alt="Skrill" className="w-10" />
        </div>
      </div>
    </footer>
  );
}
