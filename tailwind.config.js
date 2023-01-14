/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './lib/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // static theme values: to be replaced with theme/index object --
        networks: {
          'polkadot-primary': 'rgb(211, 48, 121)',
          'polkadot-secondary-light': '#552bbf',
          'polkadot-secondary-dark': '#6d39ee',
          'polkadot-transparent': 'rgb(211, 48, 121, 0.05)',
          'kusama-transparent-light': 'rgb(51,51,51,0.05)',
          'kusama-transparent-dark': 'rgb(102,102,102, 0.05)',
          'westend-primary': '#da4e71',
          'westend-secondary-light': '#de6a50',
          'westend-secondary-dark': '#d7674e',
          'westend-transparent': 'rgb(218, 78, 113, 0.05)',
        },
        backgrounds: {
        },
        buttons: {
          secondary: {
            'active-light': '#eeecec',
            'active-dark': '#333',
            'hover-light': '#e8e6e6',
            'hover-dark': '#222',
          }
        },
        // ---

        // color-[theme-key]
        'color-network-primary': 'var(--color-network-primary)',
        'color-network-secondary': 'var(--color-network-secondary)',
        'color-network-transparent': 'var(--color-network-transparent)',
        'color-network-stroke': 'var(--color-network-stroke)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-button-secondary': 'var(--color-button-secondary)',
        'color-button-secondary-hover': 'var(--color-button-secondary-hover)',
      },
      fontSize: {
        plus: '1.15rem',
      },
      spacing: {
        // small button spacing
        'button-small-x': "0.92rem",
        'button-small-y': "0.2rem",
        // large button spacing
        'button-large-x': "0.95rem",
        'button-large-y': "0.25rem",
        // invert button spacing
        'button-invert-x': "0.8rem",
        'button-invert-y': "0.4rem",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};
