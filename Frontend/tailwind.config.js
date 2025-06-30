/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eras: ['"Eras Demi ITC"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
