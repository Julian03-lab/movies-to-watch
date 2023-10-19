"use client";

import { Movie } from "@/types/common";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

type MovieProps = {
  title: string;
  photo: string;
  user_id: string;
  movie_id: number;
}[];

const AddButton = ({
  session,
  data,
}: {
  session: Session | null;
  data: any;
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleClick = async () => {
    if (!session) return;

    let movies: MovieProps = [];
    data &&
      data[0].base_movies.forEach((movie: Movie) => {
        movies.push({
          title: movie.title,
          photo: movie.poster_path,
          user_id: session?.user.id,
          movie_id: movie.id,
        });
      });

    await supabase.from("movies").insert(movies);
    router.push("/");
  };
  return (
    <button
      onClick={handleClick}
      className="uppercase mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 group-hover:from-primary-300 group-hover:to-lime-300 hover:text-black-700 "
    >
      <span className="relative px-5 py-2.5 transition ease-in duration-75 bg-black-700 rounded-md group-hover:bg-opacity-0">
        Añadir recomendaciones a mi lista
      </span>
    </button>
  );
};

export default AddButton;
