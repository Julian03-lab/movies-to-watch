import { CardActionButtons } from "../home/CardActionButtons";
import { MovieDetail } from "@/types/common";
import supabaseServer from "@/utils/supabase/supabaseServer";

const AuthButtonMovies = async ({ movie }: { movie: MovieDetail }) => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession();

  return <CardActionButtons session={session} movie={movie} />;
};

export default AuthButtonMovies;
