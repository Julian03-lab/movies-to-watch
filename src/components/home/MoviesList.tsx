import { StarIcon } from "@/utils/Icons";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddMovieCard from "./AddMovieCard";
import voteAverageFormatter from "@/utils/voteAverageFormatter";
import { MovieDetail } from "@/types/common";

const MoviesList = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: movies } = await supabase.from("movies").select();
  return (
    <div className="flex gap-4 flex-wrap justify-start w-full max-w-desktop">
      {movies &&
        movies.map((movie: MovieDetail) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-end"
          >
            <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px]">
              {movie.title}
            </p>
            {movie.user_vote && (
              <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1">
                {voteAverageFormatter(movie.user_vote)}
                <StarIcon fill="#f5bf03" width={10} height={10} />
              </p>
            )}
            <div
              className={`w-[128px] h-[190px] relative mt-2 ${
                !movie.user_vote && "grayscale"
              } hover:grayscale-0 transition delay-100 cursor-pointer hover:shadow-lg`}
            >
              <Image
                fill
                sizes="100%"
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
