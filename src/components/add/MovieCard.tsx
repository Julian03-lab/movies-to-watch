"use client";

import { Movie } from "@/types/common";
import { StarIcon } from "@/utils/Icons";
import Image from "next/image";
import { useState } from "react";
import MovieModal from "../modals/MovieModal";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [setselectedMovie, setSetselectedMovie] = useState<Movie | null>(null);

  return (
    <>
      <MovieModal movie={setselectedMovie} setMovie={setSetselectedMovie} />
      <button
        onClick={() => setSetselectedMovie(movie)}
        className="flex flex-col items-center justify-end"
      >
        <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px]">
          {movie.title}
        </p>
        <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1 mb-2">
          {movie.vote_average}
          <StarIcon fill="#f5bf03" width={10} height={10} />
        </p>
        <div className={`w-full h-auto relative aspect-[9/16]`}>
          <Image
            fill
            className="rounded-lg"
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt={movie.title}
            blurDataURL=""
          />
        </div>
      </button>
    </>
  );
};

export default MovieCard;
