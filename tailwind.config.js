/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/subComponents/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Shabnam", "cursive"],
        body: ["Shabnam", "sans-serif"],
      },
      boxShadow: {
        'custom': '-1px 5px 100px rgba(0, 0, 0, 0.2)',
        'custom-lg': '-1px 5px 40px rgba(0, 0, 0, 0.3)',
        'custom-xl': '-1px 5px 100px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  daisyui: {
    rtl: true,
    themes: [
      {
        mytheme: {
          "primary": "#0028FF",
          "secondary": "#0962ea",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("daisyui")],
};
