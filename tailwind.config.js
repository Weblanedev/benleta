/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./dist/js/index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#ebf5ff", // Lightest blue
          100: "#d1eaff",
          200: "#a7d8ff",
          300: "#70bfff", // Light blue
          400: "#38a3ff",
          500: "#007bff", // Primary blue
          600: "#0063cc",
          700: "#004c99",
          800: "#003366",
          900: "#001a33", // Darkest blue
        },
        secondary: {
          50: "#fef6e8", // Complementary neutral
          100: "#fdeccc",
          200: "#fad69a",
          300: "#f5b05e",
          400: "#ee8a26",
          500: "#d9730b",
          600: "#ad5a09",
          700: "#804107",
          800: "#532905",
          900: "#291403",
        },
        accent: {
          50: "#f2fbea", // Accent green
          100: "#e5f7d3",
          200: "#c9eca7",
          300: "#a5e171",
          400: "#7ed842",
          500: "#5ebd2a",
          600: "#47961f",
          700: "#356f16",
          800: "#23490d",
          900: "#122306",
        },
      },

      boxShadow: {
        myShadow: "inset 10px 2 3px rgb(255, 255, 255, 0.5)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        general: ["var(--font-general)"],
      },
    },
  },
  plugins: [],
};
