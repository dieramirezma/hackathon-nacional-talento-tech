/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        agroGreen: {
          dark: "#6B8E23",
          ligth: "#32CD32",
          medium: "#66C266",
        },
      },
    },
  },
  plugins: [],
};

