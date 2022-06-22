module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
