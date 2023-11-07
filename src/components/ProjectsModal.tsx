type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectsModal = ({ isOpenModal, setIsOpenModal }: ModalProps) => {
  return (
    <div
      onClick={() => setIsOpenModal(!isOpenModal)}
      className="fixed left-0 top-0 h-screen w-full bg-transparent"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-darknes-bg fixed inset-0 left-1/2 top-1/2 z-20 h-5/6 w-3/4 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md"
      ></div>
    </div>
  );
};
