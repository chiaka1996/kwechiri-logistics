/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f56f0f",
        primary_background: "#f1f8f7",
        text_color: "#606161",
        primary_color: "#f56f0f",
        secondary_color: "#1c3f39",
      },
    },
  },
  plugins: [],
};
