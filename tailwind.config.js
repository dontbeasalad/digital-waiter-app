module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sky-blue": "#4287EE",
        "text-color": "#262626",
        "yellow-main": "#FACA00",
        "gray-card": "#ECECEC;",
        "yellow-banana": "#FACA002E",
        "green-done": "#28B62C;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
