const MovieSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-10 gap-4 justify-start w-full">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-end animate-pulse w-full"
        >
          <div
            className={`w-full h-[176px] relative bg-gray-400 rounded-lg `}
          />
          <span className="h-4 my-2 bg-gray-400 w-full rounded" />
          <span className="h-4 w-9 bg-gray-400 rounded" />
        </div>
      ))}
    </div>
  );
};

export default MovieSkeleton;
