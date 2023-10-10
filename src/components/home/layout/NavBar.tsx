// "use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-gray-200 bg-black-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">
            Movies To Watch
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white font-semibold rounded-lg text-base px-5 py-3 text-center mr-3 md:mr-0 bg-primary-500 hover:bg-primary-600"
          >
            Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
}
