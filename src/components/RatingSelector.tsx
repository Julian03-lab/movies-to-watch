import { useState } from "react";
import { StarIcon } from "@/utils/Icons";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { MovieDetail } from "@/types/common";
import { useRouter } from "next/navigation";

const RatingSelector = ({
  movie,
  session,
}: {
  movie: MovieDetail;
  session: Session | null;
}) => {
  const [rating, setRating] = useState(movie.user_vote || 0);
  const [hover, setHover] = useState(0);
  const router = useRouter();

  const supabase = createClientComponentClient();

  const updateMovieRating = async (rating: number) => {
    const { error } = await supabase
      .from("movies")
      .update({ user_vote: rating })
      .match({ id: movie.id, user_id: session?.user.id });

    if (error) {
      throw error;
    }

    setHover(0);
    router.refresh();
  };

  return (
    <>
      <div className="flex items-center space-x-1 justify-between w-full">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => setRating(value)}
            className="cursor-pointer"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setHover(0);
              setRating(0);
            }}
          >
            <StarIcon
              className={`w-8 h-8 ${
                value <= (hover || rating) ? "text-yellow-300" : "text-gray-500"
              } transition-colors delay-100`}
            />
          </button>
        ))}
      </div>
      {rating > 0 && (
        <button
          onClick={() => updateMovieRating(rating)}
          className="flex items-center justify-center text-black-700 text-lg font-semibold py-1 px-3 rounded-lg shadow-lg bg-primary-300 hover:bg-primary-400"
        >
          Calificar
        </button>
      )}
    </>
  );
};

export default RatingSelector;
