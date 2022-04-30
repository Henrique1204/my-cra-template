const BASE_DEPENDENCIES = ["react-router-dom@6", "styled-components"];

const DEV_DEPENDENCIES = [
  "@types/styled-components",
  "@craco/craco",
  "babel-plugin-transform-inline-environment-variables",
];

const JEST_DEPENDENCIES = [
  "@testing-library/dom",
  "jest@27.5.1",
  "babel-jest@27.5.1",
  "jest-environment-jsdom@27.5.1",
  "ts-jest",
  "fetch-mock",
];

const DOCZ_DEPENDENCIES = [
  "docz",
  "@emotion/core@10.1.1",
];

const COMMANDS_LIST = {
  START: "npx create-react-app . --template typescript",
  FIX_REACT_SCRIPTS: "npm i react-scripts@4.0.3 -D",
  INSTALL_DEPENDENCIES_BASE: `npm i ${BASE_DEPENDENCIES.join(" ")}`,
  INSTALL_DEPENDENCIES_DEV: `npm i ${DEV_DEPENDENCIES.join(" ")} -D`,
  INSTALL_DEPENDENCIES_JEST: `npm i ${JEST_DEPENDENCIES.join(" ")} -D`,
  INSTALL_DOCZ_DEPENDENCIES: `npm i ${DOCZ_DEPENDENCIES.join(" ")} -D --legacy-peer-deps`,
};

module.exports = COMMANDS_LIST;
