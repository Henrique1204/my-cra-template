import { DefaultTheme, FlattenSimpleInterpolation } from "styled-components";

import mixinsValues from "./mixins";

export { default as mixins } from "./mixins";

export const primary = {
  main: "#1177CC",
  dark: "#265CAC",
  background: "#161925",
};

export const text = {
  dark: "#161925",
  light: "#FFF",
};

export const success = {
  darker: "#008C38",
  dark: "#00AE48",
  main: "#28C76F",
  light: "#93FBC0",
  lighter: "#EEF8F7",
};

export const warning = {
  darker: "#BA7308",
  dark: "#DD8922",
  main: "#FF9F43",
  light: "#FFDEAA",
  lighter: "#FBF5F0",
};

export const danger = {
  darker: "#9C1717",
  dark: "#C72E37",
  main: "#EA5455",
  light: "#FF9E9E",
  lighter: "#FAF1F1",
};

export const info = {
  darker: "#00A3A3",
  dark: "#00C4C6",
  main: "#00CFE8",
  light: "#54F3FF",
  lighter: "#ECF8FA",
};

export const palette = {
  text,
  primary,
  success,
  warning,
  danger,
  info,
};

export const mobile = {
  minWidth: 0,
  maxWidth: 720,
};

export const tablet = {
  minWidth: 721,
  maxWidth: 1080,
};

export const desktop = {
  minWidth: 1081,
};

export const breakpoints = {
  mobile,
  tablet,
  desktop,
};

export const min = (min: number, data: FlattenSimpleInterpolation) =>
  `@media only screen and (min-width: ${min}px) {${data}}`;

export const max = (max: number, data: FlattenSimpleInterpolation) =>
  `@media only screen and (max-width: ${max}px) {${data}}`;

export const custom = (
  min: number,
  max: number,
  data: FlattenSimpleInterpolation
) =>
  `@media only screen and (min-width: ${min}px and max-width: ${max}px) {${data}}`;

export const screens = {
  min,
  max,
  custom,
};

const theme: DefaultTheme = {
  palette,
  breakpoints,
  screens,
  mixins: mixinsValues,
};

export default theme;
