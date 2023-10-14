import Link from "next/link";

const FilterButton = () => {
  return (
    <div className="flex gap-3">
      <Link
        href={"/?status=qualified"}
        className="px-4 py-2 bg-primary-500 text-black-700 rounded-md text-sm font-medium"
      >
        Vistos
      </Link>
      <Link
        href={"/?status=notqualified"}
        className="px-4 py-2 bg-primary-500 text-black-700 rounded-md text-sm font-medium"
      >
        Sin ver
      </Link>
      <Link
        href={"/"}
        className="px-4 py-2 bg-primary-500 text-black-700 rounded-md text-sm font-medium"
      >
        Todos
      </Link>
    </div>
  );
};

export default FilterButton;
