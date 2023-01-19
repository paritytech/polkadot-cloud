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
        network: {
          'polkadot-primary': 'rgb(211, 48, 121)',
          'polkadot-secondary-light': 'rgb(85, 43, 191)',
          'polkadot-secondary-dark': 'rgb(109, 57, 238)',
          'polkadot-transparent': 'rgb(211, 48, 121, 0.05)',
          'kusama-primary-light': 'rgb(31, 41, 55)',
          'kusama-primary-dark': 'rgb(107, 114, 128)',
          'kusama-secondary-light': 'rgb(31, 41, 55)',
          'kusama-secondary-dark': 'rgb(156, 163, 175)',
          'kusama-transparent-light': 'rgb(51,51,51,0.05)',
          'kusama-transparent-dark': 'rgb(102,102,102, 0.05)',
          'kusama-stroke-light': 'rgb(75, 85, 99)',
          'kusama-stroke-dark': 'rgb(209, 213, 219)',
          'westend-primary': 'rgb(218, 78, 113)',
          'westend-secondary-light': 'rgb(222, 106, 80)',
          'westend-secondary-dark': 'rgb(215, 103, 78)',
          'westend-transparent': 'rgb(218, 78, 113, 0.05)',
        },
        text: {
          'primary-light': 'rgb(8, 8, 8)',
          'primary-dark': 'rgb(249, 250, 251)',
          'invert-light': 'rgb(249, 250, 251)',
          'invert-dark': 'rgb(8, 8, 8)',
        },
        background: {
        },
        button: {
          secondary: {
            'active-light': 'rgb(238, 236, 236)',
            'active-dark': 'rgb(51, 51, 51)',
            'hover-light': 'rgb(232, 230, 230)',
            'hover-dark': 'rgb(34, 34, 34)',
          }
        },
        // ---

        // color-[theme-key]
        'color-network-primary': 'var(--color-network-primary)',
        'color-network-secondary': 'var(--color-network-secondary)',
        'color-network-transparent': 'var(--color-network-transparent)',
        'color-network-stroke': 'var(--color-network-stroke)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-invert': 'var(--color-text-invert)',
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
