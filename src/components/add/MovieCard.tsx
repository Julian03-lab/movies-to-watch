"use client";

import { Movie } from "@/types/common";
import { StarIcon } from "@/utils/Icons";
import Image from "next/image";
import { useState } from "react";
import MovieModal from "../modals/MovieModal";
import voteAverageFormatter from "@/utils/voteAverageFormatter";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [setselectedMovie, setSetselectedMovie] = useState<Movie | null>(null);

  return (
    <>
      <MovieModal movie={setselectedMovie} setMovie={setSetselectedMovie} />
      <button
        onClick={() => setSetselectedMovie(movie)}
        className="flex flex-col items-center"
      >
        <Image
          priority
          width={720}
          height={1280}
          className="rounded-lg h-[176px]"
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt={movie.title}
        />
        <p className="text-[10px] font-semibold text-center text-primary-500 tracking-wider uppercase my-2 max-w-full truncate">
          {movie.title}
        </p>
        <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1">
          {voteAverageFormatter(movie.vote_average)}
          <StarIcon fill="#f5bf03" width={10} height={10} />
        </p>
      </button>
    </>
  );
};

export default MovieCard;
