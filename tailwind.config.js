/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw',
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
