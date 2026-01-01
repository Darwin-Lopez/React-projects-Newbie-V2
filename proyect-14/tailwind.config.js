/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'White-custom': 'hsl(0, 100%, 100%)',
        Purple: {
          100: 'hsl(275, 100%, 97%)',
          600: 'hsl(292, 16%, 49%)',
          950: 'hsl(292, 42%, 14%)',
        }
      },
    },
  },
  plugins: [],
};
