/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // If you still have pages
    "./components/**/*.{js,ts,jsx,tsx}", // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
