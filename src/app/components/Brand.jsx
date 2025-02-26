'use client';

import React from 'react';

const Brand = () => {
  return (
    <div className="w-full bg-gray-100 py-12 flex justify-center">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="text-gray-600 font-semibold text-sm mb-4">BRANDS DIRECTORY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-500 text-sm">
          {/* jewellery */}


          <p><span className='font-bold'>Jewellery:</span> Necklaces | Earrings | Couple Rings | Pendants | Crystal | <br /> Bangles | Bracelets | Nose Pin | Chain | Earrings | Couple Rings</p>



          {/* Fashion */}

          <p> <span className='font-bold'>Fashion:</span> T-Shirt | Short & jeans | Jacket | Dress & Frock | Inner Wear | Hosiery</p>
tmi
          {/* footwear */}
          <div className='flex'>
            <h3 className="font-semibold text-gray-700 mb-2"></h3>
            <p> <span className='font-bold'>Footwear:</span>Sport | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded | First Copy | Long Shoes</p>
          </div>
          {/* Cosmetics */}

          <p><span className='font-bold'>Cosmetics:</span> Shampoo | Body Wash | Face Wash | Makeup Kit | Liner | Lipstick | Perfume | Body Shop | Scrub | Hair Gel | Hair Colors | Hair Dye | Sunscreen | Skin Lotion | Liner | Lipstick</p>


        </div>
      </div>
    </div>
  );
};

export default Brand;
