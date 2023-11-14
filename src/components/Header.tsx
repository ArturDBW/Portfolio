import { useEffect, useState } from "react";
import { Logo } from "../elements/Logo";

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
      className={`fixed left-0 top-0 z-10  flex h-14 w-full items-center justify-between px-10 text-white max-sm:px-5 ${
        scrolled ? "bg-black bg-opacity-20 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <Logo />
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </header>
  );
};
