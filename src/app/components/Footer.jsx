'use client';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";
import footerImage from '../assets/images/logo/dragon-fruit 1.png';
import playStore from '../assets/images/footer/Link → android.png.png';
import appStore from '../assets/images/footer/Link → apple.png.png';
import payments from '../assets/images/footer/payment.png.png';

export default function Footer() {
    return (
        <footer className="bg-white text-[#686e7d] pt-10">
            <div className="w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8">
                {/* Logo & Description */}
                <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <Image src={footerImage} alt="Logo" className="w-10 h-10" />
                        <div>
                            <h2 className="font-bold text-xl flex flex-col">
                                <span className="text-xs font-medium text-[#ff954d]">Yellow</span>
                                <span className="text-black text-base font-semibold">Berry</span>
                            </h2>
                        </div>
                    </div>
                    <p className="mt-3 text-sm">
                        BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-3 mt-4">
                        <Image src={playStore} alt="Google Play" className="w-32 cursor-pointer" />
                        <Image src={appStore} alt="App Store" className="w-32 cursor-pointer" />
                    </div>
                </div>
                {/* Category */}
                <div className="flex mr-9 md:mr-0 justify-center">
                    <div className=" text-left">
                        <h3 className="font-semibold text-lg mb-4">Category</h3>
                        <ul className="space-y-2 text-sm">
                            {["Dairy & Milk", "Snack & Spice", "Fast Food", "Juice & Drinks", "Bakery", "Seafood"].map((item, index) => (
                                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Company */}
                <div className="flex justify-center">
                    <div className="text-left">
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            {["About us", "Delivery", "Legal Notice", "Terms & conditions", "Secure payment", "Contact us"].map((item, index) => (
                                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Account */}
                <div className="flex justify-center">
                    <div className="text-left">
                        <h3 className="font-semibold text-lg mb-4">Account</h3>
                        <ul className="space-y-2 text-sm">
                            {["Sign In", "View Cart", "Return Policy", "Become a Vendor", "Affiliate Program", "Payments"].map((item, index) => (
                                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Contact */}
                <div className="flex justify-center">
                    <div className="text-left">
                        <h3 className="font-semibold text-center text-lg mb-4">Contact</h3>
                        <p className="flex items-center justify-center sm:justify-start space-x-2"><IoLocationSharp className="text-[#eda957]" /> <span>971 Lajamni, Surat, Bharat</span></p>
                        <p className="flex items-center justify-center sm:justify-start space-x-2"><MdPhone className="text-[#eda957]" /> <span>+00 9876543210</span></p>
                        <p className="flex items-center justify-center sm:justify-start space-x-2"><MdEmail className="text-[#eda957]" /> <span>example@email.com</span></p>
                        <div className="flex justify-center sm:justify-start space-x-4 text-white mt-4">
                            <div className="cursor-pointer p-2 bg-[#3d4750] rounded-md hover:text-blue-600">
                                <FaFacebookF />
                            </div>
                            <div className="cursor-pointer p-2 bg-[#3d4750] rounded-md hover:text-blue-400">
                                <FaTwitter />
                            </div>
                            <div className="cursor-pointer p-2 bg-[#3d4750] rounded-md hover:text-blue-700">
                                <FaLinkedinIn />
                            </div>
                            <div className="cursor-pointer p-2 bg-[#3d4750] rounded-md hover:text-pink-500">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t py-2">
                <div className="w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left">
                    <p>Copyright &copy; 2025 <span className="text-orange-500">BlackRise</span>. All rights reserved.</p>
                    <div className="flex space-x-3 mt-2 sm:mt-0">
                        <Image src={payments} alt="Payments" className="w-32 h-5" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
