const BASE_DEPENDENCIES = ["react-router-dom@6", "styled-components"];

const DEV_DEPENDENCIES = [
  "@types/styled-components",
  "@craco/craco",
  "babel-plugin-transform-inline-environment-variables",
  "babel-plugin-transform-inline-environment-variables",
  "@testing-library/dom",
  "jest-environment-jsdom",
  "fetch-mock",
  "ts-jest",
];

const COMMANDS_LIST = {
  START: "npx create-react-app . --template typescript",
  FIX_REACT_SCRIPTS: "npm i react-scripts@4.0.3 -D",
  INSTALL_DEPENDENCIES_BASE: `npm i ${BASE_DEPENDENCIES.join(" ")}`,
  INSTALL_DEPENDENCIES_DEV: `npm i ${DEV_DEPENDENCIES.join(" ")} -D`,
};

module.exports = COMMANDS_LIST;
