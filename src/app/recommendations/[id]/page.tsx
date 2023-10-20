import AddButton from "@/components/recommendations/AddButton";
import { RecommendationsTitle } from "@/components/recommendations/RecommendationsTitle";
import { StarIcon } from "@/utils/Icons";
import supabaseServer from "@/utils/supabase/supabaseServer";
import voteAverageFormatter from "@/utils/voteAverageFormatter";
import Image from "next/image";
import { Fragment } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession();

  const { data } = await supabaseServer()
    .from("recommendations")
    .select(
      `
    id,
    name,
    description,
    base_movies (id, title,overview, poster_path, vote_average, release_date)
    `
    )
    .eq("id", params.id);

  return (
    <div className="flex min-h-screen px-28 py-8 gap-6 bg-black-700 flex-col items-center">
      {data &&
        data.map((recommendation) => (
          <Fragment key={recommendation.id}>
            <RecommendationsTitle
              name={recommendation.name}
              description={recommendation.description}
            />
            <div className="flex flex-wrap justify-start w-full gap-2">
              {recommendation.base_movies.map((movie) => (
                <div key={movie.id} className="flex flex-col items-center">
                  <div className="relative h-[370px] w-[250px]">
                    <Image
                      fill
                      className="rounded-lg"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        movie.poster_path
                      }
                      alt={movie.title}
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-center text-primary-500 tracking-wider uppercase my-2 max-w-full truncate">
                    {movie.title}
                  </p>
                  <p className="text-[10px] font-normal text-center text-primary-500 flex gap-1">
                    {voteAverageFormatter(Number(movie.vote_average))}
                    <StarIcon fill="#f5bf03" width={10} height={10} />
                  </p>
                </div>
              ))}
            </div>
            <AddButton session={session} data={data} />
          </Fragment>
        ))}
    </div>
  );
};

export default Page;
