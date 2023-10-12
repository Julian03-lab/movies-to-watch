"use client";
import { Movie, responseTMDB } from "@/types/common";
import axios from "axios";
import MovieCard from "./MovieCard";
import SearchInput from "./SearchInput";
import { useEffect, useRef, useState } from "react";
import useDebounce from "@/utils/hooks/useDebounce";
import MovieSkeleton from "./MovieSkeleton";
import Pagination from "../Pagination";

async function getData(query: string, page: number = 1) {
  const url = query
    ? `
  https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`
    : `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;

  try {
    const res = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch data from server");
    }

    return res.data;
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
  const [page, setPage] = useState(1);
  const totalPages = useRef(1);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const movies: responseTMDB = await getData(searchTerm.trim(), page);
      setMovies(movies.results);
      totalPages.current = movies.total_pages > 500 ? 500 : movies.total_pages;
      setLoading(false);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, page]);

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPage(1);
    const query = event.target.value;
    setSearchTerm(query);
  };

  console.log(page);

  return (
    <>
      <Pagination
        actualPage={page}
        pages={totalPages.current}
        setPage={setPage}
      />
      <SearchInput query={searchTerm} setQuery={handleSearchChange} />
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4 justify-start w-full">
        {loading && <MovieSkeleton />}
        {!loading &&
          movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MovieListFromApi;
