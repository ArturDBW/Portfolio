import { MainButton } from "../elements/MainButton";
import test from "../assets/test.png";

export const Home = () => {
  const scrollToAboutSection = () => {
    const scrollTarget = document.getElementById("aboutSection");

    if (scrollTarget) {
      scrollTarget.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex w-full text-black dark:text-white">
      <div className="flex h-[600px] w-full max-sm:bg-home-gradient-linear-light dark:max-sm:bg-home-gradient-linear">
        <div className="dark:bg-radial-gradient2 bg-radial-gradient-light2 w-1/3 max-sm:hidden"></div>
        <div className="dark:bg-radial-gradient bg-gradient-light  w-2/3 max-sm:hidden"></div>
      </div>
      <div className="absolute left-0 top-0 w-full px-10 max-sm:px-5">
        <div className="mx-auto flex h-[600px] max-w-7xl items-center justify-between">
          <div className="grow max-sm:w-full">
            <h4 className="text-xl font-bold max-md:text-lg">
              Hi there! I&rsquo;m
            </h4>
            <h1 className="mb-2 mt-6 text-6xl font-bold max-md:text-4xl max-sm:text-5xl">
              Artur Wiśniewski
            </h1>
            <h3 className="mb-16 text-3xl max-lg:text-xl max-sm:text-2xl">
              <span className="gradient-text mr-1 font-bold">Frontend </span>
              <span>developer</span>
            </h3>
            <MainButton onClick={scrollToAboutSection}>About me</MainButton>
          </div>
          <div className="flex grow justify-end max-sm:hidden">
            <img src={test} alt="test" />
          </div>
        </div>
      </div>
    </section>
  );
};
