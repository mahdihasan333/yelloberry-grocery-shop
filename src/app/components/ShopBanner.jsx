'use client';

import React from 'react';
import { motion } from 'framer-motion';
import tasty1 from '../assets/images/logo/one.png@2x (1).png'
import tasty2 from '../assets/images/logo/two.png.png'
import Image from 'next/image';

const ShopBanner = () => {
  const items = [
    {
      image: tasty1,
      title: 'Tasty Snack & Fast food',
      description: 'The flavour of something special',
      bgColor: 'bg-orange-100',
    },
    {
      image: tasty2,
      title: 'Fresh Fruits & Vegetables',
      description: 'A healthy meal for every One',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-md flex items-center ${item.bgColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={item.image} alt={item.title} className="w-64 object-contain" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopBanner;
