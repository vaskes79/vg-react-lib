/** for vertical line */
const MARGIN_BTN = '25px';

/** font settings */
const FONTS = {
  base: `'SFPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  size: '14px',
  smallSize: '12px',
  sizeH1: '28px',
  weight: 500,
};

/** text colors */
const T_COLORS = {
  light: '#fff',
  dark: '#000',
  accent: '#f99e30',
  accentText: '#7186a8',
}

const COLORS = {
  bgLight: '#FBFDFF',           /** lightGray Background */
  bg: '#F2F7FF',                /** Gray Background */
  text: '#7186A8',              /** Dark Gray text color */
  primary: '#2945B3',           /** Deep Blue main color*/
	primaryHover: '#5f79df',      /** Button Primary hover color */
  warning: '#FFAE4C',           /** Golden */
  success: '#0EBD35',           /** Green */
  danger: '#EA5D5D',            /** Red */
  dark: '#23272B',              /** Dark Button color */
  info: '#138496',              /** Info Button color */
  light: '#FBFDFF',             /** Light Button color */
  secondary: '#5A6268',         /** Seconary Button color */
  link: 'transparent;',         /** Link Button color */
  disabled: '#f2f7ff',          /** Disabled Button color */
  bigBorder: '#e7edf8',         /** Big avatar border color */
  bgInput: '#e7edf8',           /** Background input default */
	errorBorder: '#fb5454',       /** Input colors */
	validBorder: '#0ebd35',       /** Input colors */
	borderColorSelect: '#dfe7f5', /** Select colors */
}

/** Sizes */

const BTN_SIZES = {
	small:  '4px 20px 5px 20px',
  normal: '7px 40px 8px 40px',
  big:    '14px 60px',
};

/** Border Radius */
const B_RADIUS = '5px';

export { MARGIN_BTN, FONTS, T_COLORS, COLORS, BTN_SIZES, B_RADIUS };
