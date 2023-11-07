type ButtonProps = {
  children: React.ReactNode;
};

export const MainButton = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-md bg-gradient-linear px-6 py-3 font-bold uppercase tracking-widest duration-100 ease-out hover:scale-110 hover:bg-white hover:bg-none hover:text-black hover:shadow-gradient-linear-shadow">
      {children}
    </button>
  );
};
