import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, Path } from 'svgs';

import { LIGHT_GREY } from '../../constants';

/**
 * scatteredFlurries icon component
 * @param {!Object} props - components props
 * @param {number} props.size - icon size
 * @param {string} props.fill - icon fill modifier
 * @param {string} props.viewBox - viewBox
 * @param {string} props.className - modifier class name
 * @param {(style|Object)} props.style - style override
 * @returns {JSX}
 */
const scatteredFlurries = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <Path d="M157.573 177.757l-7.918 4.574.483-4.41a2.496 2.496 0 0 0-2.206-2.749c-1.352-.155-2.593.836-2.748 2.206l-.87 8.038-13.165 7.607v-15.361l6.514-4.782a2.483 2.483 0 0 0 .542-3.472 2.492 2.492 0 0 0-3.48-.543l-3.576 2.62v-8.995c0-1.37-1.12-2.49-2.49-2.49a2.491 2.491 0 0 0-2.49 2.49v8.995l-3.584-2.62a2.492 2.492 0 0 0-2.938 4.024l6.522 4.773v15.361l-13.293-7.685-.88-8.038a2.506 2.506 0 0 0-2.747-2.206 2.5 2.5 0 0 0-2.206 2.749l.482 4.41-7.788-4.496a2.479 2.479 0 0 0-3.395.904 2.482 2.482 0 0 0 .905 3.403l7.797 4.498-4.066 1.792a2.495 2.495 0 0 0-1.275 3.282 2.505 2.505 0 0 0 2.283 1.49c.327 0 .672-.068.999-.215l7.392-3.265 13.303 7.685-13.303 7.677-7.392-3.266a2.495 2.495 0 0 0-3.282 1.275 2.492 2.492 0 0 0 1.275 3.283l4.058 1.792-7.789 4.497a2.492 2.492 0 0 0-.913 3.403c.465.793 1.3 1.241 2.162 1.241.414 0 .845-.112 1.241-.336l7.788-4.497-.482 4.42a2.498 2.498 0 0 0 2.206 2.74 2.481 2.481 0 0 0 2.74-2.206l.878-8.039 13.302-7.676v15.206l-6.522 4.773a2.492 2.492 0 0 0-.542 3.481 2.498 2.498 0 0 0 3.48.534l3.584-2.628v9.159c0 1.37 1.112 2.49 2.49 2.49 1.37 0 2.49-1.12 2.49-2.49v-9.159l3.584 2.628c.44.319.948.474 1.465.474.767 0 1.525-.353 2.007-1.008a2.484 2.484 0 0 0-.542-3.48l-6.514-4.774V201.64l13.165 7.599.87 8.038a2.482 2.482 0 0 0 2.473 2.214c.086 0 .172 0 .267-.008a2.495 2.495 0 0 0 2.205-2.749l-.474-4.41 7.918 4.574a2.41 2.41 0 0 0 1.25.336c.852 0 1.688-.448 2.153-1.24a2.5 2.5 0 0 0-.913-3.404l-7.926-4.575 4.066-1.792a2.495 2.495 0 0 0 1.275-3.282 2.495 2.495 0 0 0-3.282-1.275l-7.401 3.265-13.165-7.608 13.165-7.598 7.4 3.256a2.4 2.4 0 0 0 1 .216c.956 0 1.87-.552 2.283-1.482a2.505 2.505 0 0 0-1.275-3.291l-4.066-1.784 7.926-4.583a2.472 2.472 0 0 0 .913-3.395 2.48 2.48 0 0 0-3.403-.904zm46.587-40.05a32.9 32.9 0 0 1-5.013 2.026c-3.307 1.174-7.04 1.814-11.094 1.814H58.133c-1.173 0-2.56-.107-4.16-.32C41.28 139.093 32 128.213 32 115.307c0-14.4 11.627-26.24 26.027-26.24l.64.106c2.986 0 5.546-2.56 5.546-5.546 0-14.4 11.734-26.134 26.24-26.134 4.267 0 8.427 1.067 12.16 2.987 1.494.747 3.094.853 4.694.32 1.386-.533 2.666-1.813 3.2-3.2 5.546-15.253 20.266-25.6 36.48-25.6 19.2 0 35.733 14.4 38.4 33.493.32 2.454 2.56 4.587 5.12 4.8 18.666 1.067 33.28 16.747 33.28 35.627 0 13.44-7.467 25.6-19.627 31.787m-8.96-77.654c-5.013-22.506-25.067-38.72-48.213-38.72-18.774 0-36.054 10.774-44.48 27.52-3.84-1.386-8-2.133-12.054-2.133C72 46.72 56.32 60.693 53.76 78.613c-18.347 2.24-32.427 18.027-32.427 36.694 0 16.64 11.094 30.933 26.774 35.52.426.213.96.32 1.493.426.64.107 1.28.32 1.813.427h.107c.64.107 1.173.213 1.813.213h.32c.747.107 1.6.214 2.454.214.64.106 1.173.106 1.92.106h130.026c2.454 0 4.907-.213 7.254-.533.32 0 .64-.107.96-.107.426-.106.853-.106 1.173-.213.32-.107.64-.107.96-.213.427-.107.747-.214 1.067-.32 1.066-.214 2.133-.534 3.093-.854.747-.32 1.493-.533 2.133-.853.534-.107.96-.32 1.387-.533.32-.107.64-.32.96-.427.427-.213.853-.427 1.28-.747 16-7.68 26.24-23.68 26.24-41.493 0-22.933-16.853-42.453-39.36-45.867" fill={`${fill || LIGHT_GREY}`} />
  </Svg>
);

scatteredFlurries.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
};

export default scatteredFlurries;
