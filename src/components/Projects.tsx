import { SingleProject } from "./SingleProject";
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
