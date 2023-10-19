export const RecommendationsTitle = ({
  name,
  description,
}: {
  name: string;
  description: string | null;
}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-3 max-w-desktop">
      <h1 className="text-4xl font-semibold text-primary-500 tracking-[0.3em] uppercase">
        {name}
      </h1>
      {description && (
        <div className="flex gap-5 w-full items-center">
          <div className="w-full bg-primary-500 h-1" />
          <p className="uppercase text-sm font-semibold text-primary-500 tracking-[0.5em] whitespace-nowrap">
            {description}
          </p>
          <div className="w-full bg-primary-500 h-1" />
        </div>
      )}
    </div>
  );
};
