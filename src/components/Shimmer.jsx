import React from "react";

const Shimmer = () => (
  <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(9)].map((_, index) => (
      <div key={index} className="animate-pulse space-y-2 p-4 border border-gray-300 rounded-lg">
        <div className="bg-gray-300 h-32 rounded-md"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export default Shimmer;
