import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;

      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10  flex h-14 w-full items-center justify-between bg-transparent px-10 text-white ${
        scrolled ? "bg-black bg-opacity-20 backdrop-blur-lg" : ""
      }`}
    >
      <div>
        <span className=" text-2xl font-bold">
          arturd<span className="text-pink-500">B</span>w.dev
        </span>
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </header>
  );
};
