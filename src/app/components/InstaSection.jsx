"use client";

import React from "react";

const InstaSection = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Top Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <p className="text-xs text-gray-500">June 8, 2014 - organic</p>
            <h3 className="text-sm font-semibold mt-1">
              Marketing Guide: 5 Steps to Success.
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <p className="text-xs text-gray-500">May 9, 2023 - organic</p>
            <h3 className="text-sm font-semibold mt-1">
              Best way to solve business deal issue.
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <p className="text-xs text-gray-500">Jan 1, 2020 - organic</p>
            <h3 className="text-sm font-semibold mt-1">
              Business ideas to grow your business.
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <p className="text-xs text-gray-500">Feb 1, 2022 - organic</p>
            <h3 className="text-sm font-semibold mt-1">
              31 customer stats know in 2020.
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Image Grid with #Insta */}
      <div className="grid grid-cols-5 gap-4 mt-10">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-lg"></div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-lg"></div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white shadow-lg rounded-lg flex items-center justify-center font-semibold text-gray-600">
          #Insta
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-lg"></div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default InstaSection;
