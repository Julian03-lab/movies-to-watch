import React from "react";
import FormLogin from "./FormLogin";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { CardActionButtons } from "../home/CardActionButtons";
import { MovieDetail } from "@/types/common";

const AuthButtonMovies = async ({ movie }: { movie: MovieDetail }) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <CardActionButtons session={session} movie={movie} />;
};

export default AuthButtonMovies;
