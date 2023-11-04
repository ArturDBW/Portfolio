import test from "/src/assets/test.png";

export const Home = () => {
  return (
    <section className="relative flex h-[600px] w-full">
      <div className="flex h-[600px] w-full">
        <div className="custom-bg-gradient2 w-1/3"></div>
        <div className="custom-bg-gradient w-2/3"></div>
      </div>
      <div className="absolute left-0 top-0 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="grow font-bold text-white">
            <h4 className="text-xl">Hi there! I&rsquo;m</h4>
            <h1 className="mb-2 mt-6 text-6xl">Artur Wiśniewski</h1>
            <h3 className="mb-16 text-3xl">Frontend developer</h3>
            <button>About me</button>
          </div>
          <div className="flex grow justify-end">
            <img src={test} alt="test" />
          </div>
        </div>
      </div>
    </section>
  );
};
