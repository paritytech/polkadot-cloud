/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        plus: '1.15rem',
      },
      spacing: {
        'button-small-x': "0.9rem",
        'button-small-y': "0.42rem",
        'button-large-x': "1.2rem",
        'button-large-y': "0.52rem",
      }
    },
  },
  presets: [
    require('cirque/themes/polkadot/tw-preset')
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};
