/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
     "./src/js/**/*.js",
     "./src/css/**/*.css"
    ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"]
      },
      colors: {
        "green-200-lighter": "var(--green-200-lighter)",
        "green-600-medium": "var(--green-600-medium)",
        "red": "var(--red)",
        "white": "var(--white)",
        "grey-500-medium": "var(--grey-500-medium)",
        "grey-900-darker": "var(--grey-900-darker)"
      }
    },
  },
  plugins: [],
}

