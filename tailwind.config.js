/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      margin: {
        "420px": "420px",
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', "cursive"],
      },
    },
  },
  theme: {
    extend: {

      colors: {
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#38B2AC",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
          backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
        },

      },
    },
  },
  theme: {
    extend: {
      screens: {
        ipad: { min: "660px", max: "912px" },
        horizontal: { raw: "(max-height: 600px) and (max-width: 1024px)" },

      },
    },
  },
  plugins: [],
};
