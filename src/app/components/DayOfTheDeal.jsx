'use client';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

const products = [
  {
    id: 1,
    category: 'Chocos',
    name: 'Mixed Fruits Chocolate Pack',
    price: 25,
    oldPrice: 30,
    quantity: '1 Pack',
    tag: 'NEW',
    rating: 4.5,
  },
  {
    id: 2,
    category: 'Juice',
    name: 'Organic Apple Juice Pack',
    price: 15,
    oldPrice: 18,
    quantity: '100 ml',
    tag: 'HOT',
    stock: 3,
    rating: 4.0,
  },
  {
    id: 3,
    category: 'Juice',
    name: 'Mixed Almond Nuts Juice Pack',
    price: 32,
    oldPrice: 39,
    quantity: '260 g',
    rating: 4.2,
  },
  {
    id: 4,
    category: 'Fruits',
    name: 'Fresh Mango Slice Juice',
    price: 25,
    oldPrice: 30,
    quantity: 'Out Of Stock',
    tag: 'SALE',
    stock: 0,
    rating: 3.8,
  },
];

export default function DayOfTheDeal() {
  const [timeLeft, setTimeLeft] = useState(881 * 24 * 60 * 60 + 3 * 3600 + 25 * 60 + 10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hrs = Math.floor((seconds % (24 * 3600)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days} Days ${hrs} : ${mins} : ${secs}`;
  };

  return (
    <div className="w-11/12 mx-auto bg-white">
      <h2 className="text-xl font-semibold text-center md:text-left">Day Of The <span className="text-blue-500">Deal</span></h2>
      <p className="text-gray-500 text-sm text-center md:text-left">Don't wait. The time will never be just right.</p>
      <div className="text-center md:text-right text-gray-600 text-sm mb-4">{formatTime(timeLeft)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-dashed border-2 p-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm relative flex flex-col items-center md:items-start bg-white">
            {product.tag && (
              <span className="absolute top-2 left-2 bg-gray-200 text-xs px-2 py-1 rounded">{product.tag}</span>
            )}
            <div className="h-32 w-full bg-gray-300 rounded mb-2"></div>
            <p className="text-gray-500 text-xs">{product.category}</p>
            <h3 className="text-sm font-semibold text-center md:text-left">{product.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className={i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
            <p className="text-red-500 font-bold">${product.price} <span className="line-through text-gray-400">${product.oldPrice}</span></p>
            <p className={`text-xs ${product.stock === 0 ? 'text-red-500' : 'text-gray-500'}`}>
              {product.stock === 0 ? 'Out Of Stock' : `${product.quantity}`} {product.stock ? `(${product.stock} Left)` : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
