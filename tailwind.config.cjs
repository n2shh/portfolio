/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      geometria: ["Geometria"],
    },
    colors: {
      black: "#0E131B",
      swhite: "#F5F5F5",
      lgray: "#C8D1DF",
      sgray: "#6C8093",
      mpurple: "#BA7BCC",
    },
  },
  plugins: [],
};
