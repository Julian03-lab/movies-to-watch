import { StarIcon } from "@/utils/Icons";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddMovieCard from "./AddMovieCard";

const MoviesList = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: movies } = await supabase.from("movies").select();
  return (
    <div className="flex gap-4 flex-wrap justify-start w-full">
      {movies &&
        movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-end"
          >
            <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px]">
              {movie.title}
            </p>
            <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1 mb-2">
              {movie.vote_average}
              <StarIcon fill="#f5bf03" width={10} height={10} />
            </p>
            <div
              className={`w-[128px] h-[190px] relative ${
                !movie.qualified && "grayscale"
              }`}
            >
              <Image
                fill
                className="rounded-lg"
                src={"https://image.tmdb.org/t/p/original" + movie.photo}
                alt={movie.title}
                blurDataURL=""
              />
            </div>
          </div>
        ))}
      <AddMovieCard />
    </div>
  );
};

export default MoviesList;
