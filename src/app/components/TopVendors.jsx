'use client';

import Image from 'next/image';

export default function TopVendors() {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-xl font-semibold text-gray-800 text-center">Top <span className="text-[#eda957]">Vendors</span></h2>
      <p className="text-gray-500 text-sm text-center mb-6">Discover Our Trusted Vendors Based on Sales & Popularity</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Featured Vendor Image */}
        <div className="bg-gray-300 rounded-lg h-64 md:h-auto relative"></div>

        {/* Vendor List */}
        <div className="space-y-4">
          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center border border-blue-400">
            <div>
              <h3 className="text-sm font-semibold text-[#eda957]">Mario Fashion Pvt. Ltd.</h3>
              <p className="text-gray-500 text-xs">Fruits (5) | Vegetables (30) | Snacks (04)</p>
            </div>
            <span className="text-gray-600 text-sm">Sales - 587</span>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Eelna Fashion Pvt. Ltd.</h3>
              <p className="text-gray-500 text-xs">Fruits (8) | Vegetables (15) | Snacks (04)</p>
            </div>
            <span className="text-gray-600 text-sm">Sales - 428</span>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Mario Fashion Pvt. Ltd.</h3>
              <p className="text-gray-500 text-xs">Fruits (16) | Vegetables (42) | Snacks (18)</p>
            </div>
            <span className="text-gray-600 text-sm">Sales - 1024</span>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Mario Fashion Pvt. Ltd.</h3>
              <p className="text-gray-500 text-xs">Fruits (2) | Vegetables (10) | Snacks (03)</p>
            </div>
            <span className="text-gray-600 text-sm">Sales - 210</span>
          </div>
        </div>
      </div>
    </section>
  );
}
