import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, Path } from 'svgs';

import { LIGHT_GREY } from '../../constants';

/**
 * hail icon component
 * @param {!Object} props - components props
 * @param {number} props.size - icon size
 * @param {string} props.fill - icon fill modifier
 * @param {string} props.viewBox - viewBox
 * @param {string} props.className - modifier class name
 * @param {(style|Object)} props.style - style override
 * @returns {JSX}
 */
const hail = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <Path d="M51.2 186.01a5.335 5.335 0 0 1-5.333-5.334 5.335 5.335 0 0 1 5.333-5.333c2.944 0 5.333 2.39 5.333 5.333s-2.389 5.334-5.333 5.334zm95.86 37.832c-5.888 0-10.666-4.779-10.666-10.667s4.778-10.666 10.666-10.666 10.667 4.778 10.667 10.666-4.779 10.667-10.667 10.667zm-51.02-10.52c-5.889 0-10.667-4.78-10.667-10.667s4.778-10.667 10.666-10.667c5.888 0 10.667 4.779 10.667 10.667s-4.779 10.667-10.667 10.667zm94.077-46.412c-.661 1.344-1.77 2.539-2.677 3.659-1.685 2.048-3.37 4.085-5.067 6.122-3.541 4.256-7.082 8.512-10.634 12.758-.79.96-1.59 1.909-2.39 2.858-1.578 1.846-4.192 2.379-6.314 1.387-.384-.181-.822-.512-1.152-.79-2.198-1.855-2.464-5.29-.608-7.477l6.026-7.082c2.667-3.126 5.291-6.262 7.979-9.366 1.27-1.45 2.443-2.976 3.712-4.426 1.216-1.408 2.55-3.094 4.224-3.936 1.856-.94 4.256-.875 5.877.5 1.056.897 1.686 2.294 1.611 3.68a5.389 5.389 0 0 1-.587 2.113zm14.042-29.203a32.9 32.9 0 0 1-5.013 2.026c-3.307 1.174-7.04 1.814-11.094 1.814H58.132c-1.173 0-2.56-.107-4.16-.32C41.28 139.093 32 128.213 32 115.307c0-14.4 11.627-26.24 26.027-26.24l.64.106c2.986 0 5.546-2.56 5.546-5.546 0-14.4 11.734-26.134 26.24-26.134 4.267 0 8.427 1.067 12.16 2.987 1.494.747 3.094.853 4.694.32 1.386-.533 2.666-1.813 3.2-3.2 5.546-15.253 20.266-25.6 36.48-25.6 19.2 0 35.733 14.4 38.4 33.493.32 2.454 2.56 4.587 5.12 4.8 18.666 1.067 33.28 16.747 33.28 35.627 0 13.44-7.467 25.6-19.627 31.787m-8.96-77.654c-5.013-22.506-25.067-38.72-48.213-38.72-18.774 0-36.054 10.774-44.48 27.52-3.84-1.386-8-2.133-12.054-2.133C72 46.72 56.32 60.693 53.76 78.613c-18.347 2.24-32.427 18.027-32.427 36.694 0 16.64 11.094 30.933 26.774 35.52.426.213.96.32 1.493.426.64.107 1.28.32 1.92.427.64.107 1.173.213 1.813.213h.32c.747.107 1.6.214 2.454.214.64.106 1.173.106 1.92.106h12.16l-8.107 9.494c-1.92 2.133-1.6 5.546.533 7.466.32.214.747.534 1.174.747 2.133.96 4.693.533 6.293-1.387l13.227-15.36c.213-.426.533-.64.64-.96h35.413l-16.427 20.267c-.96 1.173-.746 2.773.427 3.733 1.067.96 2.773.747 3.733-.426l17.387-21.547c.533-.533.747-1.28.64-2.027h15.36l-26.88 33.387c-.96 1.173-.747 2.88.427 3.733 1.066.96 2.773.747 3.733-.426l27.947-34.667c.426-.533.64-1.28.533-2.027h41.813c25.152 0 46.507-21.12 46.507-46.293 0-22.933-16.853-42.453-39.36-45.867" fill={`${fill || LIGHT_GREY}`} />
  </Svg>
);

hail.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
};

export default hail;
