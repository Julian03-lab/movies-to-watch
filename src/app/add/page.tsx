import React, { Suspense } from "react";
import Loading from "../loading";
import MovieListFromApi from "@/components/MovieListFromApi";
import { BackArrow } from "@/utils/Icons";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col px-28 py-8 gap-6 bg-black-700">
      <Link href={"/"} className="flex gap-2 items-center">
        <BackArrow className="w-6 h-6 text-primary-500" />
        <h2 className="text-lg font-normal text-primary-500">Ir atras</h2>
      </Link>
      <Suspense fallback={<Loading />}>
        <MovieListFromApi />
      </Suspense>
    </main>
  );
};

export default page;
