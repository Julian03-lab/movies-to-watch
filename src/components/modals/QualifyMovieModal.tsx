import { MovieDetail } from "@/types/common";
import { CloseIcon } from "@/utils/Icons";
import Image from "next/image";
import RatingSelector from "../RatingSelector";

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movie: MovieDetail;
};

const QualifyMovieModal = async ({ open, setOpen, movie }: ModalProps) => {
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
            >
              <CloseIcon className="w-6 h-6 stroke-primary-500" />
            </button>
            <div className="px-6 py-6 lg:px-8 flex flex-col gap-4 items-center w-full">
              <h3 className="text-white font-semibold text-xl">
                Calificar película
              </h3>
              <Image
                priority
                width={720}
                height={1280}
                className="rounded-lg max-w-[200px] shadow-xl"
                src={"https://image.tmdb.org/t/p/original" + movie.photo}
                alt={movie.title}
              />
              <RatingSelector movie={movie} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QualifyMovieModal;
