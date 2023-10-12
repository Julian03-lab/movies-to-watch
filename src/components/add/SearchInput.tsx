"use client";

import { SearchIcon } from "@/utils/Icons";
import useDebounce from "@/utils/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = ({ search }: { search: string | undefined }) => {
  const [query, setQuery] = useState(search);
  const debouncedQuery = useDebounce(query, 500);
  const router = useRouter();

  useEffect(() => {
    if (!debouncedQuery) {
      router.push("/add");
    } else {
      router.push(`/add?search=${debouncedQuery.trim()}`);
    }
  }, [debouncedQuery, router]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4 h-4 text-gray-400" />
      </div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="search"
        id="search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Buscar por titulo"
      />
    </div>
  );
};

export default SearchInput;
