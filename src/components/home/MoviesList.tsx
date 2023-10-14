import { StarIcon } from "@/utils/Icons";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddMovieCard from "./AddMovieCard";
import voteAverageFormatter from "@/utils/voteAverageFormatter";
import { MovieDetail } from "@/types/common";
import { CardActionButtons } from "./CardActionButtons";
import AuthButtonMovies from "../landing/AuthButtonMovie";

const MoviesList = async ({ status }: { status: string | undefined }) => {
  const supabase = createServerComponentClient({ cookies });

  const watched =
    status === undefined ? undefined : status === "qualified" ? true : false;

  console.log("visto", watched);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let query = supabase
    .from("movies")
    .select()
    .order("created_at", { ascending: true })
    .eq("user_id", session?.user.id);

  if (watched !== undefined) {
    query = query.eq("watched", watched);
  }

  const { data: movies } = await query;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-start w-full max-w-desktop">
      {movies &&
        movies.map((movie: MovieDetail) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-end"
          >
            <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px]">
              {movie.title}
            </p>
            <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1">
              {movie.user_vote ? (
                <>
                  {voteAverageFormatter(movie.user_vote)}
                  <StarIcon fill="#f5bf03" width={10} height={10} />
                </>
              ) : (
                "Pelicula pendiente"
              )}
            </p>
            <div className="relative group">
              <AuthButtonMovies movie={movie} />
              <Image
                width={720}
                height={1280}
                className={`rounded-lg mt-2 ${
                  !movie.user_vote && "grayscale"
                } group-hover:grayscale-[40%] group-hover:shadow-lg`}
                src={"https://image.tmdb.org/t/p/original" + movie.photo}
                alt={movie.title}
              />
            </div>
          </div>
        ))}
      <AddMovieCard />
    </div>
  );
};

export default MoviesList;
