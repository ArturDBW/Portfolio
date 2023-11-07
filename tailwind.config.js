/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(90deg, rgba(236, 65, 99, 1) 0%, rgba(168, 36, 181, 1) 50%)",
        "about-gradient-linear":
          "linear-gradient(90deg, rgba(66, 22, 53, 1) 0%, rgba(21, 4, 31, 1) 50%)",
      },
      boxShadow: {
        "gradient-linear-shadow":
          "0 0 12px 3px rgba(236, 65, 99, 1), 0 0 12px 6px rgba(168, 36, 181, 1)",
      },
      backgroundColor: {
        "darknes-bg": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
