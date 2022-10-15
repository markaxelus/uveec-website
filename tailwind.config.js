/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#17335B",
        lightBlue: "#3FA3DA",
        orange: "#FCB814",
        red: "E92B2C",
      },
    },
  },
  plugins: [],
};
