import { SingleProject } from "./SingleProject";
import data from "../data.json";

export const Projects = () => {
  return (
    <section className="border-stone-700 px-10 py-8 dark:bg-[#14071A] dark:text-white max-sm:px-5">
      <h2 className="my-10 text-center text-4xl">Projects</h2>
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:flex-col max-md:gap-y-10 max-sm:grid-cols-1 max-sm:gap-y-5">
        {data.map((item) => (
          <SingleProject item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
