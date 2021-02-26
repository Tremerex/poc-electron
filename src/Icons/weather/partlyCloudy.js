import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, G, Path } from 'svgs';

import { LIGHT_GREY, YELLOW } from '../../constants';

/**
 * partlyCloudy icon component
 * @param {!Object} props - components props
 * @param {number} props.size - icon size
 * @param {string} props.fill - icon fill modifier
 * @param {string} props.viewBox - viewBox
 * @param {string} props.className - modifier class name
 * @param {(style|Object)} props.style - style override
 * @returns {JSX}
 */
const partlyCloudy = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <G fill="none" fillRule="evenodd">
      <Path d="M185.052 122.504c-9.173-11.2-23.04-18.134-38.187-18.134-18.773 0-36.053 10.774-44.48 27.52-3.84-1.386-8-2.133-12.053-2.133-8.107 0-15.68 2.773-21.867 7.253-.32-2.133-.426-4.266-.426-6.506 0-32.427 26.346-58.774 58.773-58.774 29.76 0 54.4 22.08 58.24 50.774zm-35.11-94.895l-5.227 29.013c-.214 1.387-1.067 2.56-2.24 3.413-.854.64-1.92.96-2.987.96-.32 0-.64 0-.96-.106-.427-.107-.747-.214-1.067-.32-2.346-.96-3.733-3.414-3.306-5.867l5.226-28.907c.534-2.986 3.307-4.906 6.187-4.373 1.493.32 2.667 1.067 3.52 2.24.747 1.173 1.067 2.56.853 3.947zM61.3 114.54a5.268 5.268 0 0 1-5.226 4.48c-.32 0-.64-.107-.96-.107l-28.907-5.227c-.427-.106-.747-.106-1.067-.32-2.346-.96-3.733-3.413-3.306-5.866.32-1.387 1.066-2.667 2.24-3.414 1.173-.853 2.56-1.173 4.053-.96l28.907 5.227c2.88.533 4.8 3.307 4.266 6.187zM215.114 69.53c-.214 1.386-1.067 2.56-2.24 3.413L188.767 89.69c-.853.64-1.92.96-2.987.96a6.21 6.21 0 0 1-2.026-.32c-.96-.427-1.814-1.067-2.454-1.92a5.558 5.558 0 0 1-.96-3.094c0-1.706.854-3.306 2.347-4.373l24.107-16.747c2.453-1.706 5.76-1.066 7.466 1.28.854 1.174 1.174 2.667.854 4.054zM88.82 71.77c-.96.64-2.026.96-3.093.96-.64 0-1.387-.107-2.027-.427-.96-.427-1.706-1.067-2.346-1.92L64.608 46.276c-.853-1.173-1.173-2.56-.853-3.946.213-1.494.96-2.667 2.133-3.52 2.453-1.6 5.76-1.067 7.467 1.386L90.1 64.303c1.707 2.453 1.067 5.76-1.28 7.467z" fill={`${fill || YELLOW}`} />
      <Path d="M204.16 220.29a32.9 32.9 0 0 1-5.013 2.027c-3.307 1.173-7.04 1.813-11.094 1.813H58.133c-1.173 0-2.56-.107-4.16-.32C41.28 221.677 32 210.797 32 197.89c0-14.4 11.627-26.24 26.027-26.24l.64.107c2.986 0 5.546-2.56 5.546-5.547 0-14.4 11.734-26.133 26.24-26.133 4.267 0 8.427 1.066 12.16 2.986 1.494.747 3.094.854 4.694.32 1.386-.533 2.666-1.813 3.2-3.2 5.546-15.253 20.266-25.6 36.48-25.6 19.2 0 35.733 14.4 38.4 33.494.32 2.453 2.56 4.586 5.12 4.8 18.666 1.066 33.28 16.746 33.28 35.626 0 13.44-7.467 25.6-19.627 31.787m-8.96-77.653c-5.013-22.507-25.067-38.72-48.213-38.72-18.774 0-36.054 10.773-44.48 27.52-3.84-1.387-8-2.134-12.054-2.134-18.453 0-34.133 13.974-36.693 31.894-18.347 2.24-32.427 18.026-32.427 36.693 0 16.64 11.094 30.933 26.774 35.52.426.213.96.32 1.493.427.64.106 1.28.32 1.813.426h.107c.64.107 1.173.214 1.813.214h.32c.747.106 1.6.213 2.454.213.64.107 1.173.107 1.92.107h130.026c2.454 0 4.907-.214 7.254-.534.32 0 .64-.106.96-.106.426-.107.853-.107 1.173-.214.32-.106.64-.106.96-.213.427-.107.747-.213 1.067-.32 1.066-.213 2.133-.533 3.093-.853.747-.32 1.493-.534 2.133-.854.534-.106.96-.32 1.387-.533.32-.107.64-.32.96-.427.427-.213.853-.426 1.28-.746 16-7.68 26.24-23.68 26.24-41.494 0-22.933-16.853-42.453-39.36-45.866" fill={`${fill || LIGHT_GREY}`} />
    </G>
  </Svg>
);

partlyCloudy.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
};

export default partlyCloudy;
