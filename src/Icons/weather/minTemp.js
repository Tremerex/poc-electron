import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, Path } from 'svgs';

import { GREY_BLACK } from '../../constants';

/**
 * minTemp icon component
 * @param {!Object} props - components props
 * @param {string} props.className - modifier class name
 * @param {string} props.fill - icon fill modifier
 * @param {(style|Object)} props.style - style override
 * @param {string} props.viewBox - viewBox
 * @param {number} props.width - icon width
 * @returns {JSX}
 */
const minTemp = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style}>
    <Path d="M118.24 178.304V9.563c0-4.782 4.084-8.368 8.965-8.567 4.781-.2 8.965 4.084 8.965 8.567V179.3l36.358-44.228 26.297-31.875c2.988-3.686 9.563-2.988 12.65 0 3.686 3.486 2.989 8.467 0 12.152l-9.662 11.655-41.637 50.602-26.297 31.876c-2.79 3.287-9.862 3.386-12.651 0l-9.563-11.754-41.836-50.603-26.297-31.875c-2.989-3.686-3.686-8.666 0-12.153 3.187-2.988 9.662-3.586 12.55 0l9.663 11.655 41.737 50.602 10.758 12.95zM34.965 256c-4.98 0-8.666-3.984-8.865-8.567-.2-4.681 4.283-8.666 8.965-8.666h186.172c4.98 0 8.667 3.985 8.866 8.666.199 4.583-4.284 8.567-8.965 8.567H34.965z" fill={`${fill || GREY_BLACK}`} fillRule="evenodd" />
  </Svg>
);

minTemp.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
  viewBox: PropTypes.string,
  width: PropTypes.number,
};

export default minTemp;
