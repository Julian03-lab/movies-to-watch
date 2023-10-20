import axios from "axios";

export async function getMovies(query: string | undefined, page: number = 1) {
    const url = query
      ? `
    https://api.themoviedb.org/3/search/movie?query=${query}&language=es-AR&page=${page}`
      : `https://api.themoviedb.org/3/movie/top_rated?language=es-AR&page=${page}`;
  
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
      return {results: []}
    }
  }