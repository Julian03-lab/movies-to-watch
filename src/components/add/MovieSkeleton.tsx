import React from "react";

const MovieSkeleton = () => {
  return (
    <>
      {/* <div className="relative bg-gray-400 p-5 pl-10 w-1/4 rounded-lg animate-pulse"></div>
      <div className="relative bg-gray-400 p-6 pl-10 w-full rounded-lg animate-pulse"></div> */}
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4 justify-start w-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-end animate-pulse w-full"
          >
            <div
              className={`w-full h-auto relative aspect-[9/16] bg-gray-400 rounded-lg`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieSkeleton;
