"use client";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import LoginModal from "../modals/LoginModal";
import { useState } from "react";

const FormLogin = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  async function logOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <>
      {session === null ? (
        <div>
          <button
            onClick={() => setOpen(true)}
            className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 group-hover:from-primary-300 group-hover:to-lime-300 hover:text-black-700 "
          >
            <span className="relative px-5 py-2.5 transition ease-in duration-75 bg-black-700 rounded-md group-hover:bg-opacity-0">
              Iniciar sesion
            </span>
          </button>
          <LoginModal open={open} setOpen={setOpen} />
        </div>
      ) : (
        <button
          onClick={logOut}
          className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 group-hover:from-primary-300 group-hover:to-lime-300 hover:text-black-700 "
        >
          <span className="relative px-5 py-2.5 transition ease-in duration-75 bg-black-700 rounded-md group-hover:bg-opacity-0">
            Cerrar sesion
          </span>
        </button>
      )}
    </>
  );
};

export default FormLogin;
