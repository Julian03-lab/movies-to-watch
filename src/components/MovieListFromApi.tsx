"use client";
import { Movie } from "@/types/common";
import axios from "axios";
import MovieCard from "./add/MovieCard";
import SearchInput from "./add/SearchInput";
import { useEffect, useState } from "react";
import useDebounce from "@/utils/hooks/useDebounce";
import MovieSkeleton from "./add/MovieSkeleton";

async function getData(query: string) {
  const url = query
    ? `
  https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`
    : "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  try {
    const res = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODQxYTEzMDA4Y2RlY2M4NzQ1MDI0OTQwOWE1Y2E2YiIsInN1YiI6IjY1MjQ5NmFiZmQ2MzAwMDBmZmNjNTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7TpeJdcvysgeAsRMLFfYbxbMNXtowBuaCk5O8Oyig8",
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch data from server");
    }

    return res.data.results;
  } catch (error) {
    console.log("Error -->", error);
  }
}

const MovieListFromApi = () => {
  // const movies: Movie[] = await getData();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const movies = await getData(searchTerm.trim());
      setMovies(movies);
      setLoading(false);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchTerm(query);
  };
  return (
    <>
      <SearchInput query={searchTerm} setQuery={setSearchTerm} />
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4 justify-start w-full">
        {loading &&
          Array.from({ length: 20 }).map((_, i) => <MovieSkeleton key={i} />)}
        {!loading &&
          movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MovieListFromApi;
