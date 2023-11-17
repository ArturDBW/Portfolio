type SvgProps = {
  onClick: React.MouseEventHandler;
  theme: "dark" | "light";
};

export const Moonsvg = ({ onClick, theme }: SvgProps) => {
  return (
    <svg
      className={`h-4 w-4 cursor-pointer duration-100 hover:scale-125 ${
        theme === "dark" ? "scale-125" : "scale-100"
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${theme === "dark" ? "white" : "gray"}`}
      viewBox="0 0 18 20"
      onClick={onClick}
    >
      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
    </svg>
  );
};
