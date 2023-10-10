import { AddIcon, StarIcon } from "@/utils/Icons";
import axios from "axios";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function getData() {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODQxYTEzMDA4Y2RlY2M4NzQ1MDI0OTQwOWE1Y2E2YiIsInN1YiI6IjY1MjQ5NmFiZmQ2MzAwMDBmZmNjNTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7TpeJdcvysgeAsRMLFfYbxbMNXtowBuaCk5O8Oyig8",
        },
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed to fetch data from server");
    }

    return res.data.results;
  } catch (error) {
    console.log("Error -->", error);
  }
}

const MoviesList = async () => {
  // const movies: Movie[] = await getData();
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
              } transition duration-500`}
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
      <div className="flex flex-col items-center justify-end">
        <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px] mb-2">
          Agregar pelicula
        </p>
        <button
          className={
            "w-[128px] h-[190px] relative rounded-lg flex items-center justify-center hover:shadow-md group border-4 border-dotted border-primary-500"
          }
        >
          <AddIcon
            stroke="#f5bf03"
            width={50}
            height={50}
            className="group-hover:scale-125 transition duration-150"
          />
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
