"use client";

import { MovieDetail } from "@/types/common";
import {
  createClientComponentClient,
  type Session,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import RatingSelector from "../RatingSelector";

type CardActionButtonsProps = {
  movie: MovieDetail;
  session: Session | null;
};

export const CardActionButtons = ({
  movie,
  session,
}: CardActionButtonsProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("movies")
      .delete()
      .match({ id: id, user_id: session?.user.id });
    router.refresh();
    if (error) {
      throw error;
    }
  };

  return (
    <div className="absolute top-1/2 left-0 w-full z-20 flex-col gap-2 px-4 group-hover:flex hidden">
      <RatingSelector movie={movie} session={session} />
      <button
        onClick={() => handleDelete(movie.id)}
        className="bg-red-500 text-white text-lg font-semibold py-1 px-3 rounded-lg shadow-lg hover:bg-red-600"
      >
        Eliminar de la lista
      </button>
    </div>
  );
};
