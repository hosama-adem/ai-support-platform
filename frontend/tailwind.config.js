const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // We'll define our brand colors later
      },
      // We can extend other theme properties as needed
    },
  },
  darkMode: "class", // or 'media' or true
  plugins: [
    nextui(),
    require('@tailwindcss/forms'),
  ],
}
