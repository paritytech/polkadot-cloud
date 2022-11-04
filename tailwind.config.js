/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'polkadot-primary-light': 'rgb(211, 48, 121)',
        'polkadot-primary-dark': 'rgb(211, 48, 121)',
        'polkadot-secondary-light': '#e474bc',
        'polkadot-secondary-dark': '#e474bc',
        'polkadot-transparent-light': 'rgb(211, 48, 121, 0.05)',
        'polkadot-transparent-dark': 'rgb(211, 48, 121, 0.05)',
        'kusama-primary-light': '#333',
        'kusama-primary-dark': '#666',
        'kusama-secondary-light': '#999',
        'kusama-secondary-dark': '#aaa',
        'kusama-transparent-light': 'rgb(51,51,51,0.05)',
        'kusama-transparent-dark': 'rgb(102,102,102, 0.05)',
        'westend-primary-light': '#da4e71',
        'westend-primary-dark': '#da4e71',
        'westend-secondary-light': '#e37c44',
        'westend-secondary-dark': '#e37c44',
        'westend-transparent-light': 'rgb(218, 78, 113, 0.05)',
        'westend-transparent-dark': 'rgb(218, 78, 113, 0.05)',
      },
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
