'use client';

import Image from 'next/image';

const vendors = [
  { id: 1, name: 'Mario Fashion Pvt. Ltd.', products: 70, vegetables: 50, snacks: 20, sales: '10.5k' },
  { id: 2, name: 'Easho Fashion Pvt. Ltd.', products: 80, vegetables: 60, snacks: 30, sales: '8.9k' },
  { id: 3, name: 'Marto Fashion Pvt. Ltd.', products: 90, vegetables: 55, snacks: 35, sales: '7.2k' },
  { id: 4, name: 'Hargo Fashion Pvt. Ltd.', products: 75, vegetables: 52, snacks: 23, sales: '5.3k' },
];

export default function TopVendors() {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-xl font-semibold text-gray-800 text-center">Top <span className="text-orange-500">Vendors</span></h2>
      <p className="text-gray-500 text-sm text-center mb-6">Discover Our Trusted Vendors Based on Sales & Popularity</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Featured Vendor Image */}
        <div className="bg-gray-300 rounded-lg h-64 md:h-auto relative"></div>
        
        {/* Vendor List */}
        <div className="space-y-4">
          {vendors.map((vendor, index) => (
            <div key={vendor.id} className={`p-4 bg-white shadow-md rounded-lg flex justify-between items-center ${index === 0 ? 'border border-blue-400' : ''}`}>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{vendor.name}</h3>
                <p className="text-gray-500 text-xs">Products ({vendor.products}) | Vegetables ({vendor.vegetables}) | Snacks ({vendor.snacks})</p>
              </div>
              <span className="text-gray-600 text-sm">Sales: {vendor.sales}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
