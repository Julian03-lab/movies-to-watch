import { Movie } from "@/types/common";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const Recommendations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("recommendations").select(`
  id,
  name,
  base_movies (id, title,overview, poster_path, vote_average, release_date)
  `);

  return (
    <div className="flex min-h-screen px-28 py-8 gap-6 bg-black-700">
      {data?.map((movie: any) => (
        <Link
          key={movie.id}
          className="p-3 group relative h-fit"
          href={`/recommendations/${movie.id}`}
        >
          <h1 className="uppercase text-white text-lg font-semibold mb-4 text-center ">
            {movie.name}
          </h1>
          <div className="relative h-[300px]">
            {movie.base_movies
              .slice(0, 3)
              .map((baseMovie: Movie, index: number) => (
                <div
                  key={baseMovie.id}
                  className={`absolute w-[150px] h-[250px] group-hover:scale-105 transition duration-100`}
                  style={{
                    left: `${(index + 1.5) * 20}px`,
                    top: `${index * 20}px`,
                    // zIndex: 100 - index,
                  }}
                >
                  <Image
                    fill
                    sizes="100%"
                    src={`https://image.tmdb.org/t/p/w500${baseMovie.poster_path}`}
                    alt={baseMovie.title}
                    className={`rounded-lg`}
                  />
                </div>
              ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommendations;
