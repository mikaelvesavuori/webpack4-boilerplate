module.exports = {
  plugins: {
    "postcss-cssnext": {
      browsers: [
        "Chrome >= 77",
        "Safari >= 12",
        "iOS >= 11",
        "Firefox >= 70",
        "Edge >= 15",
        "> 5%",
        "not IE 11"
      ],
      compress: true
    }
  }
};
