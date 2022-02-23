module.exports = {
  content: [
    "index.html",
    "src/**/*.{ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-base-img":
          "linear-gradient(to left bottom, #3384fd, #00a5fb, #00b7c6, #00c07f, #9cbe4d);",
      }),
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
