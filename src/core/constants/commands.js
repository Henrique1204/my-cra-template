const BASE_DEPENDENCIES = ["react-router-dom@6", "styled-components"];

const DEV_DEPENDENCIES = [
  "@types/styled-components",
  "@craco/craco",
  "babel-plugin-transform-inline-environment-variables",
];

const JEST_DEPENDENCIES = [
  "@testing-library/dom",
  "jest",
  "babel-jest",
  "jest-environment-jsdom",
  "ts-jest",
  "fetch-mock",
];

const DOCZ_DEPENDENCIES = [
  "docz",
  "@emotion/core@10.1.1",
  "eslint@7.32.0",
  "remark-mdx@2.0.0-next.9",
];

const COMMANDS_LIST = {
  START: "npx create-react-app :name --template typescript",
  INSTALL_DEPENDENCIES_BASE: `npm i --prefix ./:name ${BASE_DEPENDENCIES.join(" ")}`,
  INSTALL_DEPENDENCIES_DEV: `npm i --prefix ./:name ${DEV_DEPENDENCIES.join(" ")} -D --legacy-peer-deps`,
  INSTALL_DEPENDENCIES_JEST: `npm i --prefix ./:name ${JEST_DEPENDENCIES.join(" ")} -D`,
  INSTALL_DOCZ_DEPENDENCIES: `npm i --prefix ./:name ${DOCZ_DEPENDENCIES.join(" ")} -D --legacy-peer-deps`,
};

module.exports = COMMANDS_LIST;
