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
          'polkadot-primary': 'rgb(211, 48, 121)',
          'polkadot-transparent': 'rgb(211, 48, 121, 0.05)',
          'kusama-transparent-light': 'rgb(51,51,51,0.05)',
          'kusama-transparent-dark': 'rgb(102,102,102, 0.05)',
          'westend-primary': '#da4e71',
          'westend-transparent': 'rgb(218, 78, 113, 0.05)',
        },
        buttons: {
          secondary: {
            'active-light': '#eeecec',
            'active-dark': '#333',
            'hover-light': '#e8e6e6',
            'hover-dark': '#222',
          }
        },

        // text colors
        'color-text-primary': 'var(--color-text-primary)',

        // network colors
        'color-network-primary': 'var(--color-network-primary)',
        'color-network-secondary': 'var(--color-network-secondary)',
        'color-network-transparent': 'var(--color-network-transparent)',
        'color-network-stroke': 'var(--color-network-stroke)',
        // button colors
        'color-button-secondary': 'var(--color-button-secondary)',
        'color-button-secondary-hover': 'var(--color-button-secondary-hover)',
      },
      fontSize: {
        plus: '1.15rem',
      },
      spacing: {
        // small button spacing
        'button-small-x': "0.9rem",
        'button-small-y': "0.32rem",

        // large button spacing
        'button-large-x': "0.9rem",
        'button-large-y': "0.42rem",

        // invert button spacing
        'button-invert-x': "0.8rem",
        'button-invert-y': "0.5rem",
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
