"use client";

import { SearchIcon } from "@/utils/Icons";
import useDebounce from "@/utils/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = ({ search }: { search: string | undefined }) => {
  const [query, setQuery] = useState(search || "");
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
    <div className="relative flex-1">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-white sr-only"
      >
        Search
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4 h-4 text-primary-500" />
      </div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="search"
        id="search"
        className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
        placeholder="Buscar por titulo"
      />
    </div>
  );
};

export default SearchInput;
