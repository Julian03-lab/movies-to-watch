"use client";

import { CloseIcon } from "@/utils/Icons";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ open, setOpen }: ModalProps) => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const supabase = createClientComponentClient();

  async function signInWithEmail() {
    setSending(true);
    await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/callback",
      },
    });
    setSending(false);
  }
  return (
    <>
      {open && (
        <div
          id="authentication-modal"
          className="fixed top-0 left-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto flex justify-center items-center bg-black-700 bg-opacity-90"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative rounded-lg shadow bg-gray-900">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparentrounded-lg text-sm ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="w-6 h-6 stroke-primary-500" />
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-white">
                  Iniciar sesion
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Tu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    aria-describedby="email-description"
                    className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="name@flowbite.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-400"
                  >
                    Una vez ingreses tu correo te llegara un email para
                    ingresar.
                  </p>
                  {!sending ? (
                    <button
                      type="button"
                      onClick={signInWithEmail}
                      className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300 group-hover:from-primary-300 group-hover:to-lime-300 hover:text-gray-900"
                    >
                      <span className="relative px-5 py-2.5 transition ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Ingresar
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      onClick={signInWithEmail}
                      className="opacity-70 mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-300 to-lime-300"
                    >
                      <span
                        aria-disabled
                        className="relative px-5 py-2.5 transition ease-in duration-75 bg-gray-900 rounded-md"
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                          viewBox="0 0 100 101"
                          fill="none"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="#f5bf03"
                          />
                        </svg>
                        Enviando...
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
