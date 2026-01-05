/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          red: "#A31217",
          gold: "#E5C97B",
          cream: "#F3EED9",
          muted: "#9CA3AF",
          border: "#2A2A2A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
