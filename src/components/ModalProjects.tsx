import { MainButton } from "../elements/MainButton";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: {
    id: number;
    title: string;
  };
};

export const ModalProjects = ({
  isOpenModal,
  setIsOpenModal,
  item,
}: ModalProps) => {
  return (
    <div
      onClick={() => setIsOpenModal(!isOpenModal)}
      className="fixed left-0 top-0 z-10 h-screen w-full bg-transparent"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-darknes-bg fixed inset-0 left-1/2 top-1/2 z-20 h-5/6 w-3/4 -translate-x-1/2 -translate-y-1/2  rounded-md px-8 py-4 backdrop-blur-xl"
      >
        <h2 className="border-b-[1px] border-stone-400 pb-8 pt-4 text-4xl font-bold">
          {item.title}
        </h2>
        <h3 className="mb-4 mt-8 text-xl">About the project</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore
          dolores atque necessitatibus explicabo iusto delectus eligendi nihil
          veritatis, porro soluta laboriosam asperiores, dolorum molestias
          itaque voluptas! In, eveniet deleniti! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. In incidunt aspernatur vero adipisci
          assumenda! Harum tempore totam id modi eligendi ex nesciunt earum
          tenetur? Inventore quisquam nam quae officia esse?
        </p>
        <h3 className="mb-4 mt-8 text-xl">Features</h3>
        <ul>
          <li>Dodawanie wiadomo</li>
          <li>Usuwanie tez mozliwe</li>
          <li>Mozna zmienic ilosc</li>
          <li>eleganckie podsumowanie na koniec jest</li>
        </ul>
        <h3 className="mb-4 mt-8 text-xl">Technologies and tools</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>Tailwind</li>
        </ul>
        <div className="mt-8 space-x-10">
          <MainButton>Repo</MainButton>
          <MainButton>Website</MainButton>
        </div>
      </div>
    </div>
  );
};
