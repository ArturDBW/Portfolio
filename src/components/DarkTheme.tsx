import { useState, useEffect } from "react";

export const DarkTheme = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex space-x-4 rounded-md border border-gray-400 px-6 py-3">
      <div>
        <svg
          className="h-5 w-5 cursor-pointer duration-100 hover:scale-125"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill={`${theme === "light" ? "black" : "gray"}`}
          viewBox="0 0 20 20"
          onClick={() => setTheme("light")}
        >
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
        </svg>
      </div>
      <div>
        <svg
          className={`h-5 w-5 cursor-pointer duration-100 hover:scale-125 ${
            theme === "dark" ? "text-red-500" : "text-blue-500"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill={`${theme === "dark" ? "white" : "gray"}`}
          viewBox="0 0 18 20"
          onClick={() => setTheme("dark")}
        >
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
        </svg>
      </div>
    </div>
  );
};
