import AuthButtonServer from "@/components/landing/AuthButtonServer";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-gray-200 bg-black-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">
            Movies To Watch
          </span>
        </Link>
        <AuthButtonServer />
        {/* <div className="flex md:order-2">
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
            <button className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 group-hover:from-primary-300 group-hover:to-lime-300 hover:text-black-700 ">
              <span className="relative px-5 py-2.5 transition ease-in duration-75 bg-black-700 rounded-md group-hover:bg-opacity-0">
                Ir al perfil
              </span>
            </button>
          )}
        </div> */}
      </div>
    </nav>
  );
}
