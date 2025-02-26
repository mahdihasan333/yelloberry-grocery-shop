'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShippingSection = () => {
  const items = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on all US orders or above $200',
    },
    {
      icon: '🎧',
      title: '24x7 Support',
      description: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      icon: '🔄',
      title: '30 Days Return',
      description: 'Simply return it within 30 days for an exchange',
    },
    {
      icon: '💳',
      title: 'Payment Secure',
      description: 'Contact us 24 hours a day, 7 days a week',
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShippingSection;
