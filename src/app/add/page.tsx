import ServerMovieListFromApi from "@/components/add/ServerMovieListFromApi";
import { BackArrow } from "@/utils/Icons";
import Link from "next/link";
import { Suspense } from "react";
import SearchInput from "@/components/add/SearchInput";
import MovieSkeleton from "@/components/add/MovieSkeleton";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

const page = async ({ searchParams }: Props) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <main
      className="flex min-h-screen flex-col px-28 py-8 gap-6 bg-black-700"
      key={Math.random()}
    >
      <div className="flex gap-6">
        <Link href={"/"} className="flex gap-2 items-center w-1/12">
          <BackArrow className="w-6 h-6 text-primary-500" />
          <h2 className="text-lg font-normal text-primary-500">Ir atras</h2>
        </Link>
        <SearchInput search={search} />
      </div>
      <Suspense fallback={<MovieSkeleton />}>
        <ServerMovieListFromApi search={search} />
      </Suspense>
    </main>
  );
};

export default page;
