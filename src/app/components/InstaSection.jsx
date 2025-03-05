"use client";

import React from "react";

const InstaSection = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* Top Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {[
          {
            date: "June 8, 2014",
            title: "Marketing Guide: 5 Steps to Success.",
          },
          {
            date: "May 9, 2023",
            title: "Best way to solve business deal issue.",
          },
          {
            date: "Jan 1, 2020",
            title: "Business ideas to grow your business.",
          },
          {
            date: "Feb 1, 2022",
            title: "31 customer stats know in 2020.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-40 bg-gray-300"></div>
            <div className="p-4">
              <p className="text-xs text-gray-500">{item.date} - organic</p>
              <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Image Grid with #Insta */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-10">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center font-semibold ${
                index === 2 ? "bg-white shadow-lg text-gray-600" : "bg-gray-300"
              }`}
            >
              {index === 2 ? "#Insta" : ""}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstaSection;
