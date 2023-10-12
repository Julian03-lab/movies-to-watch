const Title = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-3 max-w-desktop">
      {/* <div className="w-full bg-primary-500 h-1" /> */}
      <h1 className="text-6xl font-semibold text-primary-500 tracking-[0.3em]">
        MOVIES TO WATCH
      </h1>
      <div className="flex gap-5 w-full items-center">
        <div className="w-full bg-primary-500 h-1" />
        <p className="text-sm font-semibold text-primary-500 tracking-[0.5em] whitespace-nowrap">
          MIS PELICULAS
        </p>
        <div className="w-full bg-primary-500 h-1" />
      </div>
    </div>
  );
};

export default Title;
