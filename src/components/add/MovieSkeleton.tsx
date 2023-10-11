import React from "react";

const MovieSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-end animate-pulse w-full">
      <div
        className={`w-full h-auto relative aspect-[9/16] bg-gray-400 rounded-lg`}
      />
    </div>
  );
};

export default MovieSkeleton;
