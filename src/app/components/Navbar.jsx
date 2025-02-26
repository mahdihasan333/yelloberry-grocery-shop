'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUser, FaHeart, FaShoppingCart, FaSearch, FaRegStar, FaRegUser } from 'react-icons/fa';
import { AiTwotoneAppstore } from "react-icons/ai";
import Image from 'next/image';
import logo from '../assets/images/logo/dragon-fruit 1.png';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white text-black shadow-md">
            {/* Top Bar */}
            <div className="bg-[#3d4750] text-white">
                <div className='w-11/12 mx-auto flex justify-between items-center py-2 px-4 md:px-8 text-sm'>
                    <p className="hidden md:block text-gray-300">Flat 50% off on Grocery Shop.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-gray-400">Help?</Link>
                        <Link href="#" className="hover:text-gray-400">Track Order</Link>
                        <Link href="#" className="hover:text-gray-400">Language</Link>
                        <Link href="#" className="hover:text-gray-400">Currency</Link>
                    </div>
                </div>
            </div>
            {/* Main Navbar */}
            <div className='bg-[#f8f8fb] h-20 flex items-center'>
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        {/* Logo & Description */}
                        <div className="text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start space-x-2">
                                <Image src={logo} alt="Logo" className="w-10 h-10" />
                                <div>
                                    <h2 className="font-bold text-xl flex flex-col">
                                        <span className="text-xs font-medium text-[#ff954d]">Yellow</span>
                                        <span className="text-black text-base font-semibold">Berry</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* filter and */}
                        <div className="relative hidden md:flex items-center border rounded overflow-hidden bg-white">
                            <select className="bg-gray-100 text-gray-700 px-3 py-2 focus:outline-none">
                                <option>All Categories</option>
                                <option>Vegetables</option>
                                <option>Fruits</option>
                                <option>Dairy</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="px-4 py-2 w-80 border-l focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <button className="px-4 py-2">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    {/* Card items */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="#" className="flex items-center space-x-2">
                            <div>
                                <FaRegUser className='text-[#ff6f00] w-7 h-7' />
                            </div>

                            <div className='flex flex-col'>
                                <span>Account</span>
                                <span>Login</span>

                            </div>
                        </Link>
                        <Link href="#" className="flex items-center space-x-2">
                            <div className='flex items-center'>
                                <FaRegStar className='text-[#ff6f00] w-7 h-7' />
                            </div>
                            <div className='flex flex-col'>
                                <span>3 Items</span> <span>Wishlist</span>
                            </div>
                        </Link>
                        <Link href="#" className="flex items-center space-x-2">
                            <div>
                                <IoCartOutline className='text-[#ff6f00] w-7 h-7' />
                            </div>
                            <div className='flex flex-col'>
                                <span>
                                    4 Items
                                </span>
                                <span>Cart</span>
                            </div>

                        </Link>
                    </div>
                    <button
                        className="md:hidden text-2xl text-black"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {/* Bottom Navbar */}
            <div className="bg-white text-[#3d4750] py-2 hidden md:block">
                <div className="w-11/12 mx-auto items-center flex gap-6">
                    <AiTwotoneAppstore className="text-[#ff6f00] !important" size={25} />
                    <Link href="#" className="hover:text-[#ff6f00]">Home</Link>
                    <Link href="#" className="hover:text-[#ff6f00]">Categories</Link>
                    <Link href="#" className="hover:text-[#ff6f00]">Products</Link>
                    <Link href="#" className="hover:text-[#ff6f00]">Pages</Link>
                    <Link href="#" className="hover:text-[#ff6f00]">Blog</Link>
                    <Link href="#" className="hover:text-[#ff6f00]">Offers</Link>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden text-white bg-[#252525] p-4">
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Home</Link>
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Categories</Link>
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Products</Link>
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Pages</Link>
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Blog</Link>
                    <Link href="#" className="block py-2 hover:text-[#ff6f00]">Orders</Link>
                    <div className="flex flex-col mt-4 space-y-2">
                        <Link href="#" className="flex items-center space-x-1 hover:text-[#ff6f00]">
                            <FaUser /> <span className="font-semibold">Login</span>
                        </Link>
                        <Link href="#" className="flex items-center space-x-1 hover:text-[#ff6f00]">
                            <FaHeart /> <span className="font-semibold">3 Items Wishlist</span>
                        </Link>
                        <Link href="#" className="flex items-center space-x-1 hover:text-[#ff6f00]">
                            <FaShoppingCart /> <span className="font-semibold">4 Items Cart</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
