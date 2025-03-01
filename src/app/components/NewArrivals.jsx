'use client';

import Image from 'next/image';

const products = [
  { id: 1, name: 'Ground Turmeric Powder', price: '$8', oldPrice: '$12', weight: '1 KG', rating: 5 },
  { id: 2, name: 'Organic Dried Lemon Pack', price: '$35', oldPrice: '$40', weight: '500G', rating: 4 },
  { id: 3, name: 'Crunchy Masala Chips', price: '$9', oldPrice: '$11', weight: '250G', rating: 4 },
  { id: 4, name: 'Healthy Potato Chips', price: '$12', oldPrice: '$15', weight: '300G', rating: 5 },
  { id: 5, name: 'Black Pepper Spices Pack', price: '$5', oldPrice: '$8', weight: '1 Pack', rating: 4 },
  { id: 6, name: 'Salt & Coriander Spices', price: '$6', oldPrice: '$8', weight: '200G', rating: 4 },
  { id: 7, name: 'Chilli Dried Pack', price: '$3', oldPrice: '$5', weight: '250G', rating: 3 },
  { id: 8, name: 'Tomato Ketchup Pack', price: '$9', oldPrice: '$10', weight: '500G', rating: 4 },
];

export default function NewArrivals() {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-xl font-semibold text-gray-800">New Arrivals</h2>
      <p className="text-gray-500 text-sm mb-4">Shop online for new arrivals and get free shipping</p>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 text-xs">{product.weight}</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-red-500 font-semibold">{product.price}</span>
              <span className="text-gray-400 text-xs line-through">{product.oldPrice}</span>
            </div>
            <div className="text-yellow-400 text-sm mt-1">{'★'.repeat(product.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
