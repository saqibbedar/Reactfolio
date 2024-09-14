/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "bedar-sc1": "1167px",
        "bedar-sc2": "967px",
        "bedar-sm": "467px",
        // 'bedar-xl' : "1667px",
      },
      backgroundColor: {
        'mainColor': "#212835",
        'mainHover': "#323c50",
      },
      textColor: {
        'textColor': "#212835",
        'textHover': "#323c50",
      },
    },
  },
  plugins: [],
};