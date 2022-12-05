/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 33%, 49%)",
        "blue-dark": "hsl(249, 10%, 26%)",
        "blue-grayish": "hsl(246, 25%, 77%)",
      },
      backgroundImage: {
        "background-patter-dt": "url('/images/bg-intro-desktop.png')",
        "background-patter-mb": "url('/images/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
