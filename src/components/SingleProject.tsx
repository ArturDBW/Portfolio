import { MainButton } from "../elements/MainButton";
import { ModalProjects } from "./ModalProjects";
import { useState } from "react";

type SingleProductProps = {
  item: {
    id: number;
    title: string;
    description: string;
    features: {
      feature: string;
    }[];
    technologies: {
      technology: string;
    }[];
    repoLink: string;
    websiteLink: string;
    image: string;
    gallery: {
      image: string;
    }[];
  };
};

export const SingleProject = ({ item }: SingleProductProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  if (isOpenModal === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      {isOpenModal && (
        <ModalProjects
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          item={item}
        />
      )}

      <div
        onClick={() => setIsOpenModal(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-1/3 cursor-pointer rounded-md bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 max-md:w-full"
      >
        <img
          src={item.image}
          alt="test"
          className="w-full items-stretch rounded-md p-1"
        />
        <h3 className="my-4 text-center text-2xl">{item.title}</h3>
        {isHovered && (
          <div className="absolute left-0 top-0 flex h-full w-full transform items-center justify-center bg-darknes-bg">
            <MainButton onClick={() => setIsOpenModal(!isOpenModal)}>
              Check out
            </MainButton>
          </div>
        )}
      </div>
    </>
  );
};
