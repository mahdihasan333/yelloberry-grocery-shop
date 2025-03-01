"use client";

import Image from "next/image";

export default function Fresh() {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10">
      <div className="relative w-11/12 mx-auto h-[250px] bg-gray-300 rounded-lg overflow-hidden">
        {/* Placeholder for image */}
        <Image
          src="/placeholder-image.jpg"
          alt="Fresh Vegetables"
          layout="fill"
          objectFit="cover"
          className="rounded-lg w-11/12 mx-auto"
        />

        {/* Text box */}
        <div className="absolute bottom-0 right-0 bg-white p-4 rounded-lg shadow-lg">
          <p className="text-blue-500 text-sm font-semibold">25% Off</p>
          <h2 className="text-lg font-bold text-gray-800">
            Fresh & Organic <br /> vegetables
          </h2>
          <button className="mt-2 px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
