'use client';


const DiscountBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 p-4 md:p-10 w-full">
      {/* Large Discount Banner */}
      <div className="relative bg-gray-300 w-full md:w-1/2 h-60 md:h-80 rounded-lg flex items-center justify-center">
        <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
          50% OFF
        </span>
      </div>
      
      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 md:mt-0 md:ml-6 w-full max-w-4xl">
        <div className="flex flex-col items-center p-4 rounded-lg bg-purple-100 text-black shadow-md w-full">
          <span className="text-2xl">🥤</span>
          <p className="text-sm font-medium mt-2">Cold Drinks</p>
          <p className="text-xs text-gray-500">401 items</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-yellow-100 text-black shadow-md w-full">
          <span className="text-2xl">🥐</span>
          <p className="text-sm font-medium mt-2">Bakery</p>
          <p className="text-xs text-gray-500">80 items</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-red-100 text-black shadow-md w-full">
          <span className="text-2xl">🥦</span>
          <p className="text-sm font-medium mt-2">Vegetables</p>
          <p className="text-xs text-gray-500">403 items</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-green-100 text-black shadow-md w-full">
          <span className="text-2xl">🍊</span>
          <p className="text-sm font-medium mt-2">Fruits</p>
          <p className="text-xs text-gray-500">254 items</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
