import React from "react";

type PaginationProps = {
  pages: number;
  actualPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pages, actualPage, setPage }: PaginationProps) => {
  const minPage = actualPage - 5 >= 0 ? actualPage - 3 : 2;
  const maxPage = actualPage + 4 <= pages ? actualPage + 2 : pages - 2;
  const handlePageChange = (page: number) => {
    if (page < 1 || page > pages) return;
    setPage(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => handlePageChange(actualPage - 1)}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight border rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            disabled={actualPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        <li>
          <button
            onClick={() => handlePageChange(1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${
              1 === actualPage
                ? "bg-gray-700 text-white"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white border"
            }`}
          >
            {1}
          </button>
        </li>
        {pages >= 2 && (
          <li>
            <button
              onClick={() => handlePageChange(2)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                2 === actualPage
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white border"
              }`}
            >
              {2}
            </button>
          </li>
        )}
        {actualPage >= 6 && (
          <li className="pointer-events-none border bg-gray-800 border-gray-700 text-gray-400 flex items-center justify-center px-3 h-8 leading-tight">
            ...
          </li>
        )}

        {Array.from({ length: pages })
          .slice(minPage, maxPage)
          .map((_, i) => (
            <li key={i}>
              <button
                onClick={() => handlePageChange(minPage + i + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  minPage + i + 1 === actualPage
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white border"
                }`}
              >
                {minPage + i + 1}
              </button>
            </li>
          ))}
        {actualPage < pages - 4 && (
          <li className="pointer-events-none border bg-gray-800 border-gray-700 text-gray-400 flex items-center justify-center px-3 h-8 leading-tight">
            ...
          </li>
        )}
        {pages > 2 && (
          <>
            <li>
              <button
                onClick={() => handlePageChange(pages - 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  pages - 1 === actualPage
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white border"
                }`}
              >
                {pages - 1}
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange(pages)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  pages === actualPage
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white border"
                }`}
              >
                {pages}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => handlePageChange(actualPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight border rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            disabled={actualPage === pages}
          >
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
