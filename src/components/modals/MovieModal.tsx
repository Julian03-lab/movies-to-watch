import { Movie } from "@/types/common";
import { CloseIcon, StarIcon } from "@/utils/Icons";
import voteAverageFormatter from "@/utils/voteAverageFormatter";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type ModalProps = {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
};

const MovieModal = ({ movie, setMovie }: ModalProps) => {
  const [sending, setSending] = useState(false);
  const [user, setUser] = useState<Session | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddMovie = async () => {
    if (!movie) return;

    const dataToSend = {
      title: movie.title,
      photo: movie.poster_path,
      user_vote: null,
      user_id: user?.user.id,
      movie_id: movie.id,
    };

    try {
      setSending(true);
      const { data, error } = await supabase
        .from("movies")
        .insert([dataToSend]);
      if (error) {
        throw error;
      }
      router.prefetch("/");
      router.push("/");
    } catch (error: any) {
      if (error.code === "23505") {
        toast.error("Esta pelicula ya esta en tu lista.");
      }
      setMovie(null);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      {movie && (
        <div
          onClick={() => setMovie(null)}
          id="movie-modal"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black-700/80"
        >
          <div
            className="relative rounded-lg shadow bg-gray-900 max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparentrounded-lg text-sm ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              onClick={() => setMovie(null)}
            >
              <CloseIcon className="w-6 h-6 stroke-primary-500" />
            </button>
            <div className="px-6 py-6 lg:px-8 grid grid-cols-3 gap-6">
              <Image
                priority
                width={720}
                height={1280}
                className="rounded-lg"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt={movie.title}
              />
              <div className="w-full flex flex-col col-span-2 justify-between items-start">
                <div>
                  <span className="inline-flex gap-2 items-center">
                    <h3 className="mb-2 text-2xl font-medium text-white">
                      {movie.title} ({movie.release_date.split("-")[0]})
                    </h3>
                    <p className="text-xl font-normal text-center text-primary-500 flex gap-1 mb-2 items-baseline">
                      {voteAverageFormatter(movie.vote_average)}
                      <StarIcon className="w-5 h-5 text-primary-500" />
                    </p>
                  </span>
                  <p className="text-lg font-normal text-white">
                    {movie.overview}
                  </p>
                </div>
                <button
                  onClick={handleAddMovie}
                  type="button"
                  disabled={sending}
                  className={`mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 ${
                    !sending &&
                    "group-hover:from-primary-300 group-hover:to-lime-300 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`relative px-5 py-2.5 transition ease-in duration-75 bg-gray-900 rounded-md ${
                      !sending && "group-hover:bg-opacity-0"
                    }`}
                  >
                    {sending
                      ? "Añadiendo a la lista..."
                      : "Tengo que ver esta pelicula"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieModal;
