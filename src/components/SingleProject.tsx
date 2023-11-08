import { MainButton } from "../elements/MainButton";
import { ModalProjects } from "./ModalProjects";
import { useState } from "react";

type SingleProductProps = {
  item: {
    id: number;
    title: string;
    image: string;
  };
};

export const SingleProject = ({ item }: SingleProductProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-1/3 cursor-pointer rounded-md bg-white bg-opacity-10"
      >
        <img src={item.image} alt="test" className="rounded-md p-1 " />
        <h3 className="my-4 text-center text-2xl">{item.title}</h3>
        {isHovered && (
          <div className="bg-darknes-bg absolute left-0 top-0 flex h-full w-full transform items-center justify-center">
            <MainButton onClick={() => setIsOpenModal(!isOpenModal)}>
              Check out
            </MainButton>
          </div>
        )}
      </div>
    </>
  );
};
