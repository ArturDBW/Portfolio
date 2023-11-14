import { MainButton } from "../elements/MainButton";
import { useState } from "react";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: {
    id: number;
    title: string;
    description: string;
    features: { feature: string }[];
    technologies: { technology: string }[];
    gallery: { image: string }[];
  };
};

export const ModalProjects = ({
  isOpenModal,
  setIsOpenModal,
  item,
}: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div
        onClick={() => setIsOpenModal(!isOpenModal)}
        className="fixed left-0 top-0 z-10 h-screen w-full bg-transparent"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="fixed inset-0 left-1/2 top-1/2 z-20 h-5/6 w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-y-auto  rounded-md bg-darknes-bg px-8 py-5 backdrop-blur-xl max-md:w-11/12 max-sm:px-5"
        >
          <h2 className="border-b-[1px] border-stone-400 pb-8 pt-4 text-4xl font-bold max-sm:text-2xl">
            {item.title}
          </h2>
          <div className="mt-4 flex gap-x-4 max-sm:flex-col max-sm:gap-y-5">
            {item.gallery.map((gallery, i) => (
              <div key={i} className="w">
                <img
                  src={gallery.image}
                  alt={gallery.image}
                  onClick={() => handleImageClick(gallery.image)}
                  className="cursor-pointer rounded-md"
                />
              </div>
            ))}
          </div>
          <h3 className="mb-4 mt-8 text-xl">About the project</h3>
          <p>{item.description}</p>
          <h3 className="mb-4 mt-8 text-xl">Features</h3>
          <ul>
            {item.features.map((features, i) => (
              <li key={i}>{features.feature}</li>
            ))}
          </ul>
          <h3 className="mb-4 mt-8 text-xl">Technologies and tools</h3>
          <ul>
            {item.technologies.map((technologies, i) => (
              <li key={i}>{technologies.technology}</li>
            ))}
          </ul>
          <div className="mt-8 space-x-10">
            <MainButton>Repo</MainButton>
            <MainButton>Website</MainButton>
          </div>
        </div>
      </div>
      {modalVisible && (
        <div
          onClick={() => setModalVisible(!modalVisible)}
          className="fixed left-0 top-0 z-30 h-full w-full bg-darknes-bg backdrop-blur-xl"
        >
          <div className="fixed left-1/2 top-1/2 z-40 h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2">
            <img
              src={selectedImage}
              alt={selectedImage}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};
