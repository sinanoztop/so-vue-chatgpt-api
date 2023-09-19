const nib = require("nib");

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [nib()],
        import: ["~nib/lib/nib/index.styl"],
      },
    },
  },
};
