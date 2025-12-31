/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        Green: {
          500: "hsl(158, 36%, 37%)",
          700: "hsl(158, 42%, 18%)",
        },
        Black: "hsl(212, 21%, 14%)",
        Grey: "hsl(228, 12%, 48%)",
        Cream: "hsl(30, 38%, 92%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
