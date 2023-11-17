import { useState, useEffect } from "react";
import { Moonsvg } from "../svg/Moonsvg";
import { Sunsvg } from "../svg/Sunsvg";

type Theme = "light" | "dark";

export const DarkTheme = () => {
  const [theme, setTheme] = useState<Theme>(
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
        <Sunsvg onClick={() => setTheme("light")} theme={theme} />
      </div>
      <div>
        <Moonsvg onClick={() => setTheme("dark")} theme={theme} />
      </div>
    </div>
  );
};
