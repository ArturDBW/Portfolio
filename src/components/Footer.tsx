export const Footer = () => {
  const liStyles: string = "gradient-text-hover font-bold duration-150";

  const scrollToAboutSection = () => {
    const scrollTarget = document.getElementById("aboutSection");
    const offset = 50;

    if (scrollTarget) {
      scrollTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }

    if (scrollTarget) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: scrollTarget.offsetTop - offset,
      });
    }
  };

  return (
    <footer className="bg-[#f7efef] py-10 text-lg dark:bg-[#07010e] dark:text-white">
      <ul className="flex justify-center space-x-4">
        <li
          onClick={scrollToAboutSection}
          className={`${liStyles} cursor-pointer`}
        >
          About
        </li>
        <a href="https://github.com/ArturDBW" target="_blank" rel="noreferrer">
          <li
            className={`${liStyles} border-l border-r border-black px-4 dark:border-white`}
          >
            GitHub
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/artur-wi%C5%9Bniewski-4045041b8/"
          target="_blank"
          rel="noreferrer"
        >
          <li className={liStyles}>Linkedin</li>
        </a>
      </ul>
    </footer>
  );
};
