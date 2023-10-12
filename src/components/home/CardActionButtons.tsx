"use client";

import { MovieDetail } from "@/types/common";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import QualifyMovieModal from "../modals/QualifyMovieModal";
import { useState } from "react";

type CardActionButtonsProps = {
  movie: MovieDetail;
};

export const CardActionButtons = ({ movie }: CardActionButtonsProps) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async (id: number) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
      .from("movies")
      .delete()
      .match({ id: id, user_id: session?.user.id });
    router.refresh();
    if (error) {
      throw error;
    }
  };

  return (
    <>
      <QualifyMovieModal
        open={showModal}
        setOpen={setShowModal}
        movie={movie}
      />
      <div className="absolute top-1/3 left-0 w-full z-20 flex-col gap-2 px-4 group-hover:flex hidden">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 py-1 px-2 text-white font-semibold text-xs rounded-md shadow-lg hover:bg-green-600"
        >
          Ya la vi
        </button>
        <button
          onClick={() => handleDelete(movie.id)}
          className="bg-red-500 py-1 px-2 text-white font-semibold text-xs rounded-md shadow-lg hover:bg-red-600"
        >
          Eliminar de la lista
        </button>
      </div>
    </>
  );
};
