const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      // Define the @font-face rule for the Roboto font
      "@font-face": {
        "font-family": "Roboto",
        "font-style": "normal",
        "font-weight": "400",
        "src": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap')",
      },
    },
  },
  plugins: [],
};
