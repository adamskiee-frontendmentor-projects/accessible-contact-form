import fluid, {extract, screens, fontSize} from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: 
      ["./*.html",
        "./src/js/**/*.js",
        "./src/css/**/*.css"
      ],
    extract,
    },
  theme: {
    fontSize,
    extend: {
      screens: {
        ...screens,
        "mobile": "23.4375rem",
        "desktop":"90rem",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"]
      },
      colors: {
        "green-200-lighter": "var(--green-200-lighter)",
        "green-600-medium": "var(--green-600-medium)",
        "green-700-darker": "var(--green-700-darker)",
        "red": "var(--red)",
        "white": "var(--white)",
        "grey-500-medium": "var(--grey-500-medium)",
        "grey-900-darker": "var(--grey-900-darker)"
      }
    },
  },
  plugins: [
    fluid()
  ],
}

