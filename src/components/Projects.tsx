import { useState } from "react";
import audiophileApp from "../assets/audiophileApp.png";
import { MainButton } from "../elements/MainButton";
import { ProjectsModal } from "./ProjectsModal";

export const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <section className="bg-[#14071A] py-5 text-white">
      <div className="mx-auto max-w-7xl">
        {isOpenModal && (
          <ProjectsModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
        <h2 className="text-center text-4xl">Projects</h2>
        <div className="mt-8 flex gap-x-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-1/3 cursor-pointer rounded-md bg-white bg-opacity-10"
          >
            <img src={audiophileApp} alt="test" className="rounded-md p-1 " />
            <h3 className="my-4 text-center text-2xl">audiophileShop</h3>
            {isHovered && (
              <div className="bg-darknes-bg absolute left-0 top-0 flex h-full w-full transform items-center justify-center">
                <MainButton>Check out</MainButton>
              </div>
            )}
          </div>
        </div>
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
