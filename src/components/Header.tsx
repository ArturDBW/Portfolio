// import logo from "../../public/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky flex h-14 items-center  justify-between bg-neutral-950 px-10 text-white">
      <div>
        <span className=" text-2xl font-bold">
          d<span className="text-pink-500">B</span>w
        </span>
      </div>
      <nav>
        <ul className="flex space-x-12 font-bold uppercase tracking-wider">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <button>Download CV</button>
      </div>
    </header>
  );
};
