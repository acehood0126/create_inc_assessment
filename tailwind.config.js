/* eslint @typescript-eslint/no-var-requires: "off" */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Belle: ['La Belle Aurore', 'cursive'],
      Satisfy: ['Satisfy', 'cursive'],
      Sacramento: ['Sacramento', 'cursive'],
    },
    extend: {
      colors: {
        specialRed: '#ff5555',
      },
      backgroundImage: {
        'hero-pattern': 'url("/src/assets/images/banner.jpg")',
      },
    },
  },
  plugins: [],
});
