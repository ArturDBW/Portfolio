/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(90deg, rgba(236, 65, 99, 1) 0%, rgba(168, 36, 181, 1) 50%)",
        "about-gradient-linear":
          "linear-gradient(90deg, rgba(66, 22, 53, 1) 0%, rgba(21, 4, 31, 1) 50%)",
        "about-gradient-linear-light":
          "linear-gradient(90deg, rgba(251, 237, 242, 1) 0%, rgba(247, 239, 239, 1) 100%)",
        "home-gradient-linear":
          "linear-gradient(90deg, rgba(19, 8, 37, 1) 0%, rgba(7, 1, 14, 1) 100%)",
      },
      boxShadow: {
        "gradient-linear-shadow":
          "0 0 12px 3px rgba(236, 65, 99, 1), 0 0 12px 6px rgba(168, 36, 181, 1)",
      },
      backgroundColor: {
        "darknes-bg": "rgba(0, 0, 0, 0.3)",
      },
      gradientColorStops: {
        custom: {
          0: "rgba(236, 65, 99, 1)",
          50: "rgba(168, 36, 181, 1)",
        },
      },
      linearGradientColors: {
        "custom-gradient": [
          "90deg",
          "rgba(236, 65, 99, 1) 0%",
          "rgba(168, 36, 181, 1) 50%",
        ],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-gradients")],
};
