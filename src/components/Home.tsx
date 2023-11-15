import { MainButton } from "../elements/MainButton";
import test from "../assets/test.png";

export const Home = () => {
  return (
    <section className="relative flex w-full border-b-[1px] border-stone-700">
      <div className="max-sm:bg-home-gradient-linear flex h-[600px] w-full">
        <div className="custom-bg-gradient2 w-1/3 max-sm:hidden"></div>
        <div className="custom-bg-gradient w-2/3 max-sm:hidden"></div>
      </div>
      <div className="absolute left-0 top-0 w-full px-10 max-sm:px-5">
        <div className="mx-auto flex h-[600px] max-w-7xl items-center justify-between">
          <div className="grow text-white max-sm:w-full">
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
            <MainButton>About me</MainButton>
          </div>
          <div className="flex grow justify-end max-sm:hidden">
            <img src={test} alt="test" />
          </div>
        </div>
      </div>
    </section>
  );
};
