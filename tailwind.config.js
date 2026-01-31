/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["black"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [import('daisyui')],
}

