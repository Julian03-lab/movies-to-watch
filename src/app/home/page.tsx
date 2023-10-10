import MoviesList from "@/components/home/MoviesList";
import Title from "@/components/home/Title";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-28 py-8 gap-6 bg-black-700">
      <Title />
      <Suspense fallback={<Loading />}>
        <MoviesList />
      </Suspense>
    </main>
  );
}
