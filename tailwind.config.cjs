/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      geometria: ["Geometria"],
      scpro: ["Source Code Pro"],
    },
    colors: {
      black: "#0E131B",
      swhite: "#F5F5F5",
      lgray: "#C8D1DF",
      sgray: "#6C8093",
      gpurple: "#c600ff",
      mpurple: "#BA7BCC",
    },
  },
  plugins: [],
};
