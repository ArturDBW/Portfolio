import { SingleProject } from "./singleProject";
import data from "../data.json";

export const Projects = () => {
  return (
    <section className="bg-[#14071A] py-8 text-white">
      <h2 className="my-10 text-center text-4xl">Projects</h2>
      <div className="mx-auto flex max-w-7xl gap-x-6">
        {data.map((item) => (
          <SingleProject item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

/*
<div className="gradient-border h-[300px] w-1/3 p-2">
            <img src={moviesApp} alt="movies" />
          </div>
          <div className="gradient-border h-[300px] w-1/3 p-2">
            <img src={audiophileApp} alt="audiophile" />
          </div>
          */
