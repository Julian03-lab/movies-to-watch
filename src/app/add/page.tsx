import ServerMovieListFromApi from "@/components/add/ServerMovieListFromApi";
import { BackArrow } from "@/utils/Icons";
import Link from "next/link";
import { Suspense } from "react";
import SearchInput from "@/components/add/SearchInput";
import MovieSkeleton from "@/components/add/MovieSkeleton";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  return (
    <main className="flex min-h-screen flex-col px-28 py-8 gap-6 bg-black-700">
      <div className="flex gap-6 w-full justify-between">
        <Link href={"/"} className="flex gap-2 items-center">
          <BackArrow className="w-6 h-6 text-primary-500" />
          <h2 className="text-lg font-normal text-primary-500">Ir atras</h2>
        </Link>
        <SearchInput search={search} />
        <div className="flex gap-2 items-center">
          <Link
            className={`bg-primary-400 py-2 px-4 rounded-lg text-base font-bold text-black-700 hover:bg-primary-500 ${
              page <= 1 && "pointer-events-none opacity-50"
            }`}
            href={{
              pathname: "/add",
              query: {
                ...(search ? { search } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
          >
            {"<"}
          </Link>
          <Link
            className="bg-primary-400 py-2 px-4 rounded-lg text-base font-bold text-black-700 hover:bg-primary-500"
            href={{
              pathname: "/add",
              query: { ...(search ? { search } : {}), page: page + 1 },
            }}
          >
            {">"}
          </Link>
        </div>
      </div>
      <Suspense fallback={<MovieSkeleton />}>
        <ServerMovieListFromApi search={search} page={page} />
      </Suspense>
    </main>
  );
};

export default page;
