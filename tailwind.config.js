const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06752E",
        secondary: "#05D3D3",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-custom": {
          clipPath: "polygon(0 5%, 100% 0%, 100% 100%, 0% 100%)",
        },
        ".clip-custom-sm": {
          clipPath: "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
        },
        ".clip-custom-card": {
          clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)",
        },
      });
    },
  ],
});
