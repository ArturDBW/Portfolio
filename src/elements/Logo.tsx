export const Logo = () => {
  const scrollPageToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollPageToUp} className="cursor-pointer">
      <span className="text-2xl font-bold text-black dark:text-white">
        arturd<span className="text-pink-500">B</span>w.dev
      </span>
    </div>
  );
};
