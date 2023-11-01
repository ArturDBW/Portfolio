export const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-neutral-800 px-10 text-lg text-white">
      <div>dBw</div>
      <ul className="flex space-x-8">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <div>
        <button>Contact</button>
      </div>
    </header>
  );
};
