import React from "react";
import FormLogin from "./FormLogin";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const AuthButtonServer = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <FormLogin session={session} />;
};

export default AuthButtonServer;
