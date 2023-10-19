import { AddIcon } from "@/utils/Icons";
import Link from "next/link";

const AddMovieCard = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <p className="text-xs font-semibold text-center text-primary-500 tracking-wider uppercase max-w-[128px] mb-2">
        Agregar pelicula
      </p>
      <Link
        aria-label="Add movie"
        href="/add"
        className={
          "w-[250px] h-[370px] relative rounded-lg flex items-center justify-center hover:shadow-md group border-4 border-dotted border-primary-500"
        }
      >
        <AddIcon
          stroke="#f5bf03"
          width={50}
          height={50}
          className="group-hover:scale-125 transition duration-150"
        />
      </Link>
    </div>
  );
};

export default AddMovieCard;
