import { Movie, responseTMDB } from "@/types/common";
import MovieCard from "./MovieCard";
import { getMovies } from "@/utils/getMovies";

const ServerMovieListFromApi = async ({
  search,
  page,
}: {
  search: string | undefined;
  page: number;
}) => {
  const movies: responseTMDB = await getMovies(search, page);
  return (
    <>
      {/* <Pagination
        actualPage={page}
        pages={totalPages.current}
        setPage={setPage}
      />*/}

      <div className="flex flex-wrap gap-x-2 justify-start w-full max-w-desktop gap-y-4">
        {movies.results.length > 0 &&
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};

export default ServerMovieListFromApi;
