import { Movie, responseTMDB } from "@/types/common";
import MovieCard from "./MovieCard";
import { getMovies } from "@/utils/getMovies";

const ServerMovieListFromApi = async ({
  search,
}: {
  search: string | undefined;
}) => {
  const movies: responseTMDB = await getMovies(search);
  return (
    <>
      {/* <Pagination
        actualPage={page}
        pages={totalPages.current}
        setPage={setPage}
      />*/}

      <div className="grid grid-cols-2 md:grid-cols-10 gap-4 justify-start w-full">
        {movies.results.length > 0 &&
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};

export default ServerMovieListFromApi;
