import { DefaultTheme } from 'styled-components';

import mixinsValues from './mixins';
import feedback from './feedbackColors';

import * as Responsiveness from './responsiveness';

export { default as mixins } from './mixins';

export const primary = {
	main: '#1177CC',
	dark: '#265CAC',
	background: '#161925',
};

export const text = {
	dark: '#161925',
	light: '#FFF',
};

export interface IPaletteColorContract {
	dark: string;
	main: string;
	light: string;
}

export const colors: { [key: string]: IPaletteColorContract } = {};

export const palette = {
	text,
	primary,
	feedback,
	colors,
};

export const breakpoints = {
	mobile: Responsiveness.mobile,
	tablet: Responsiveness.tablet,
	desktop: Responsiveness.desktop,
};

export const screens = {
	min: Responsiveness.min,
	max: Responsiveness.max,
	custom: Responsiveness.custom,
};

const theme: DefaultTheme = {
	palette,
	breakpoints,
	screens,
	mixins: mixinsValues,
};

export default theme;
