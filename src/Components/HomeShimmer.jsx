import React from "react";

const Shimmer = () => {
  return (
    <div className="w-80 h-auto p-4 bg-white shadow-md rounded-md overflow-hidden">
      {/* Shimmer effect for video thumbnail */}
      <div className="bg-gray-300 animate-pulse w-full h-40 mb-4 rounded-md"></div>

      {/* Shimmer effect for video title */}
      <div className="bg-gray-300 animate-pulse w-full h-6 mb-2 rounded-md"></div>

      {/* Shimmer effect for video details */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray-300 animate-pulse w-12 h-12 rounded-full"></div>
        <div>
          <div className="bg-gray-300 animate-pulse w-20 h-4 rounded-md"></div>
          <div className="bg-gray-300 animate-pulse w-16 h-3 mt-1 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const HomeShimmer = () => {
  // Simulating multiple shimmer effects
  return (
    <div className="flex mt-8 fixed flex-wrap gap-4 p-4">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      {/* Add more shimmer components as needed */}
    </div>
  );
};

export default HomeShimmer;
