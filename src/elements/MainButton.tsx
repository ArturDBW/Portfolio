type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const MainButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-gradient-to-r from-[#1D2B64] to-[#F8CDDA] bg-cover px-10 py-4 text-center uppercase text-white shadow-lg transition duration-500 hover:bg-gradient-to-l dark:from-[#AA076B] dark:to-[#61045F]"
    >
      {children}
    </button>
  );
};
