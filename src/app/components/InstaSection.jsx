"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../assets/images/card/7.png";
import image2 from "../assets/images/card/8.png";
import image3 from "../assets/images/card/9.png";
import image4 from "../assets/images/card/10.png";
// import bgImage from "../assets/images/background.jpg";

const posts = [
  {
    id: 1,
    image: image1,
    date: "June 30, 2024",
    category: "organic",
    title: "Marketing Guide: 5 Steps to Success."
  },
  {
    id: 2,
    image: image2,
    date: "May 10, 2023",
    category: "organic",
    title: "Best way to solve business deal issue."
  },
  {
    id: 3,
    image: image3,
    date: "Jan 10, 2022",
    category: "organic",
    title: "Business ideas to grow your business."
  },
  {
    id: 4,
    image: image4,
    date: "Feb 12, 2022",
    category: "organic",
    title: "31 customer stats to know in 2020."
  }
];

const InstaSection = () => {
  return (
    <div 
      className="bg-gray-50 flex flex-col items-center px-6 py-12 relative bg-cover bg-center"
      
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow relative"
          >
            <div className="relative h-48 w-full">
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-t-2xl" />
            </div>
            <div className="p-4 relative bg-white">
              <p className="text-xs text-gray-500">{post.date} - {post.category}</p>
              <h3 className="text-sm font-semibold mt-1 text-gray-800">{post.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InstaSection;