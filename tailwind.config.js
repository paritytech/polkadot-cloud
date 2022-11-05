/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        networks: {
          'polkadot-transparent': 'rgb(211, 48, 121, 0.05)',
          'kusama-transparent-light': 'rgb(51,51,51,0.05)',
          'kusama-transparent-dark': 'rgb(102,102,102, 0.05)',
          'westend-transparent': 'rgb(218, 78, 113, 0.05)',
        },
        'color-network-primary': 'var(--color-network-primary)',
        'color-network-secondary': 'var(--color-network-secondary)',
        'color-network-transparent': 'var(--color-network-transparent)',
        'color-button-secondary': 'var(--color-button-secondary)',
        'color-button-secondary-hover': 'var(--color-button-secondary-hover)',
      },
      fontSize: {
        plus: '1.15rem',
      },
      spacing: {
        'button-pri-x': "1rem",
        'button-pri-y': "0.42rem",
        'button-sec-x': "0.8rem",
        'button-sec-y': "0.35rem",
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
