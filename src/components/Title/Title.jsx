import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONTS, MARGIN_BTN } from '../Settings';

/**
 * Title compnents for creating teatels
 * avaliable to set custom colors
 *
 * @param {string} color - set color Title
 */

/** @component */
export const H1 = styled.h1`
	margin: 0;
	margin-bottom: ${MARGIN_BTN};
	font-family: ${FONTS.base};
	font-size: ${FONTS.sizeH1};
	font-weight: ${FONTS.weight};
	line-height: 0.71;
	color: ${({ color }) => (color ? color : '#000')};
`;
/** @component */
export const H2 = H1.withComponent('h2').extend`
  font-size: 24px;
`;
/** @component */
export const H3 = H1.withComponent('h3').extend`
  font-size: 18px;
`;
/** @component */
export const H4 = H1.withComponent('h4').extend`
  font-size: 15px;
  color: green;
`;
/** @component */
export const H5 = H1.withComponent('h4').extend`
  font-size: 15px;
  color: green;
`;
/** @component */
export const H6 = H1.withComponent('h6').extend`
  font-size: 15px;
  color: green;
`;

const Title = (props) => {
	let { type } = props;
	switch (type) {
		case 'h2':
			return <H2 {...props} />;
		case 'h3':
			return <H3 {...props} />;
		case 'h4':
			return <H4 {...props} />;
		case 'h5':
			return <H5 {...props} />;
		case 'h6':
			return <H6 {...props} />;
		default:
			return <H1 {...props} />;
	}
};

Title.propTypes = {
	/** for change color value type: string */
	color: PropTypes.string
};

/** @component */
export default Title;
