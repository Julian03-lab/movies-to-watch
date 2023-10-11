import React, { Suspense } from "react";
import Loading from "../loading";
import MovieListFromApi from "@/components/MovieListFromApi";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col px-28 py-8 gap-6 bg-black-700">
      <Suspense fallback={<Loading />}>
        <MovieListFromApi />
      </Suspense>
    </main>
  );
};

export default page;
