import React from "react";
import FormLogin from "./FormLogin";
import supabaseServer from "@/utils/supabase/supabaseServer";

const AuthButtonServer = async () => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession();

  return <FormLogin session={session} />;
};

export default AuthButtonServer;
