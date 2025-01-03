/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './dist/js/index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "darkGrad": "#000000",
        "lightGrad": "#3f3f46",
        "lightStart": "rgba(19, 22, 23, 0)",
        "lightMid": "rgba(77, 79, 82, 0.3)",
        "endLight": "rgba(66, 66, 68, 0.3)"
      },
      boxShadow:{
        "myShadow":  "inset 10px 2 3px rgb(255, 255, 255, 0.5)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        general: ['var(--font-general)'],
      },
    },
  },
  plugins: [],
};
