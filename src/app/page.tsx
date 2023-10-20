import Title from "@/components/home/Title";
import AuthButtonServer from "@/components/landing/AuthButtonServer";
import { Suspense } from "react";
import MoviesList from "@/components/home/MoviesList";
import FilterButton from "@/components/home/FilterButton";
import supabaseServer from "@/utils/supabase/supabaseServer";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const status =
    typeof searchParams.status === "string" ? searchParams.status : undefined;

  const {
    data: { session },
  } = await supabaseServer().auth.getSession();

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-28 py-8 gap-6 bg-black-700">
        <h1 className="text-6xl font-semibold text-primary-500 tracking-[0.3em]">
          MOVIES TO WATCH
        </h1>
        <AuthButtonServer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col px-28 py-8 gap-6 bg-black-700 items-center">
      <Title />
      <FilterButton />
      <Suspense fallback={<div> cargando </div>}>
        <MoviesList status={status} />
      </Suspense>
    </main>
  );
}
