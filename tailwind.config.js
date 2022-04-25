const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akshar: ["Akshar", ...defaultTheme.fontFamily.sans],
        workSans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
