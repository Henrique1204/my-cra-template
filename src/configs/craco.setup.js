const path = require("path");

/* eslint-disable */
module.exports = () => {
  return {
    babel: {
      plugins: ["transform-inline-environment-variables"],
    },
    webpack: {
      alias: {
        types: path.resolve(__dirname, "src/@types"),
        templates: path.resolve(__dirname, "src/templates"),
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/core/assets"),
        constants: path.resolve(__dirname, "src/core/constants"),
        features: path.resolve(__dirname, "src/core/features"),
        helpers: path.resolve(__dirname, "src/core/helpers"),
        services: path.resolve(__dirname, "src/core/services"),
        store: path.resolve(__dirname, "src/core/store"),
        hooks: path.resolve(__dirname, "src/hooks"),
        contexts: path.resolve(__dirname, "src/contexts"),
        pages: path.resolve(__dirname, "src/pages"),
        tests: path.resolve(__dirname, "src/tests"),
      },
    },
  };
};
