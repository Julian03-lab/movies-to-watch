import AuthButtonServer from "@/components/landing/AuthButtonServer";
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
      </div>
    </nav>
  );
}
