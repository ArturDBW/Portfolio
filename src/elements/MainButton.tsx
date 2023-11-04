export const MainButton = ({ children }) => {
  return (
    <button className="bg-gradient-linear hover:shadow-gradient-linear-shadow rounded-md px-6 py-3 uppercase tracking-widest duration-100 ease-out hover:scale-110 hover:bg-white hover:bg-none hover:text-black">
      {children}
    </button>
  );
};
