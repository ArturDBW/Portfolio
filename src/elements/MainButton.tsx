type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const MainButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md border-none bg-gradient-linear px-6 py-3 font-bold uppercase tracking-widest text-white outline-none duration-100 ease-out hover:scale-110 hover:bg-white hover:bg-none hover:text-black hover:shadow-gradient-linear-shadow"
    >
      {children}
    </button>
  );
};
