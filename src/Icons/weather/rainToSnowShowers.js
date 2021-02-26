import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, G, Path } from 'svgs';

import { BLUE, LIGHT_GREY } from '../../constants';

/**
 * rainToSnowShowers icon component
 * @param {!Object} props - components props
 * @param {number} props.size - icon size
 * @param {string} props.fill - icon fill modifier
 * @param {string} props.viewBox - viewBox
 * @param {string} props.className - modifier class name
 * @param {(style|Object)} props.style - style override
 * @returns {JSX}
 */
const rainToSnowShowers = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <G fill="none" fillRule="evenodd">
      <Path d="M207.172 172.577c-.224.48-.501.821-.832 1.259l-13.237 15.434c-1.59 1.846-4.203 2.38-6.325 1.366-.384-.182-.822-.502-1.163-.779-2.176-1.867-2.443-5.301-.576-7.488l13.248-15.435c1.963-2.133 5.29-2.442 7.477-.576 1.803 1.675 2.368 4.203 1.408 6.22zm-50.651 34.885c-.662 1.344-1.771 2.54-2.678 3.66-1.685 2.047-3.37 4.084-5.066 6.122-3.531 4.256-7.083 8.501-10.635 12.757-.79.95-1.59 1.91-2.39 2.848-1.578 1.856-4.191 2.39-6.314 1.387-.384-.182-.821-.502-1.152-.779-2.197-1.856-2.464-5.29-.608-7.477 2.005-2.358 4.021-4.726 6.037-7.083 2.656-3.125 5.29-6.272 7.968-9.365 1.27-1.45 2.454-2.976 3.712-4.438 1.216-1.397 2.55-3.082 4.224-3.925 1.856-.939 4.256-.875 5.878.501 1.056.896 1.685 2.294 1.61 3.68a5.389 5.389 0 0 1-.586 2.112zm-56-17.098c-.662 1.344-1.771 2.538-2.688 3.658-1.675 2.038-3.36 4.075-5.056 6.112a6126.606 6126.606 0 0 1-10.635 12.768c-.8.95-1.6 1.9-2.39 2.848-1.578 1.856-4.191 2.39-6.314 1.387-.384-.181-.821-.501-1.163-.779-2.186-1.866-2.453-5.29-.597-7.477 2.005-2.368 4.021-4.725 6.027-7.083 2.656-3.125 5.29-6.272 7.978-9.365 1.259-1.45 2.443-2.976 3.712-4.437 1.206-1.398 2.55-3.083 4.224-3.926 1.846-.938 4.246-.885 5.878.502 1.056.896 1.685 2.293 1.61 3.68-.042.746-.266 1.45-.586 2.112zm-30.078-40.485c0 .747-.107 1.387-.427 2.027-.213.427-.533.747-.853 1.28l-13.227 15.36c-1.6 1.92-4.16 2.347-6.293 1.387-.427-.214-.854-.534-1.174-.747-2.133-1.92-2.453-5.333-.533-7.467l10.453-12.266c.32.106.64.106.96.106h.32c.747.107 1.6.214 2.454.214.64.106 1.173.106 1.92.106h6.4z" fill={`${fill || BLUE}`} />
      <Path d="M167.886 121.03l-9.803 5.664.598-5.46a3.09 3.09 0 0 0-2.731-3.404c-1.675-.192-3.21 1.035-3.403 2.731l-1.077 9.952-16.299 9.419v-19.019l8.064-5.92a3.074 3.074 0 0 0 .672-4.299 3.085 3.085 0 0 0-4.31-.672l-4.426 3.243V102.13a3.091 3.091 0 0 0-3.082-3.083 3.084 3.084 0 0 0-3.083 3.083v11.136l-4.437-3.243a3.085 3.085 0 0 0-3.638 4.982l8.075 5.91v19.018l-16.459-9.515-1.088-9.952a3.102 3.102 0 0 0-3.402-2.73 3.096 3.096 0 0 0-2.731 3.402l.597 5.461-9.642-5.568a3.07 3.07 0 0 0-4.203 1.12 3.072 3.072 0 0 0 1.12 4.214l9.653 5.568-5.034 2.218a3.09 3.09 0 0 0-1.58 4.064 3.1 3.1 0 0 0 2.828 1.846c.405 0 .832-.086 1.237-.267l9.152-4.043 16.47 9.515-16.47 9.504-9.152-4.043a3.09 3.09 0 0 0-4.064 1.58 3.086 3.086 0 0 0 1.579 4.063l5.024 2.219-9.643 5.568a3.085 3.085 0 0 0-1.13 4.213 3.104 3.104 0 0 0 2.677 1.536c.512 0 1.045-.139 1.536-.416l9.642-5.568-.597 5.472c-.181 1.685 1.045 3.2 2.73 3.392.118.01.235.021.342.021a3.072 3.072 0 0 0 3.05-2.752l1.089-9.952 16.469-9.504v18.827l-8.075 5.91a3.085 3.085 0 0 0-.672 4.309 3.092 3.092 0 0 0 4.31.661l4.437-3.253v11.338a3.084 3.084 0 0 0 3.083 3.083 3.091 3.091 0 0 0 3.082-3.083v-11.338l4.438 3.253a3.065 3.065 0 0 0 1.813.587c.95 0 1.888-.438 2.485-1.248a3.075 3.075 0 0 0-.672-4.31l-8.064-5.909v-18.827l16.299 9.408 1.077 9.952a3.073 3.073 0 0 0 3.062 2.742c.106 0 .213 0 .33-.01a3.089 3.089 0 0 0 2.73-3.404l-.586-5.46 9.803 5.663c.48.288 1.013.416 1.547.416a3.1 3.1 0 0 0 2.666-1.536 3.094 3.094 0 0 0-1.13-4.213l-9.814-5.664 5.035-2.219a3.09 3.09 0 0 0 1.579-4.064 3.09 3.09 0 0 0-4.064-1.579l-9.163 4.043-16.299-9.419 16.299-9.408 9.163 4.032c.394.182.82.267 1.237.267a3.09 3.09 0 0 0 2.827-1.835 3.101 3.101 0 0 0-1.58-4.074l-5.034-2.208 9.814-5.675a3.06 3.06 0 0 0 1.13-4.203 3.07 3.07 0 0 0-4.213-1.12z" fill={`${fill || LIGHT_GREY}`} />
      <Path d="M234.562 105.921c0 2.048-.139 4.096-.416 6.123-.256 2.005-.672 4-1.195 5.941A48.968 48.968 0 0 1 231 123.67a47.826 47.826 0 0 1-2.666 5.334 47.05 47.05 0 0 1-3.328 4.938 48.03 48.03 0 0 1-3.958 4.491 46.852 46.852 0 0 1-4.533 3.957c-5.333 4.086-11.52 7.403-18.24 8.352-3.712.523-7.499.3-11.243.3h-4.949c-2.773-.214-5.013-2.56-5.013-5.334 0-2.88 2.24-5.12 5.013-5.334h14.72c.853-.106 1.6-.32 2.347-.64a32.9 32.9 0 0 0 5.013-2.026c12.16-6.187 19.627-18.347 19.627-31.787 0-18.88-14.614-34.56-33.28-35.627-2.56-.213-4.8-2.346-5.12-4.8-2.667-19.093-19.2-33.493-38.4-33.493-16.214 0-30.934 10.347-36.48 25.6-.534 1.387-1.814 2.667-3.2 3.2-1.6.533-3.2.427-4.694-.32-3.733-1.92-7.893-2.987-12.16-2.987-14.506 0-26.24 11.734-26.24 26.134 0 2.986-2.56 5.546-5.546 5.546l-.64-.106c-14.4 0-26.027 11.84-26.027 26.24 0 12.906 9.28 23.786 21.973 25.92 1.6.213 2.987.32 4.16.32h21.76c2.987 0 5.334 2.346 5.334 5.333s-2.347 5.333-5.334 5.333H58.03c-.747 0-1.28 0-1.92-.106-.854 0-1.707-.107-2.454-.214h-.32c-.33 0-.64 0-.96-.106-.32 0-.533-.107-.96-.107-.533-.107-1.173-.32-1.813-.427-.533-.106-1.067-.213-1.493-.426-15.68-4.587-26.774-18.88-26.774-35.52 0-18.667 14.08-34.454 32.427-36.694 2.56-17.92 18.24-31.893 36.693-31.893 4.054 0 8.214.747 12.054 2.133 8.426-16.746 25.706-27.52 44.48-27.52 23.146 0 43.2 16.214 48.213 38.72 22.507 3.414 39.36 22.934 39.36 45.867" fill={`${fill || LIGHT_GREY}`} />
    </G>
  </Svg>
);

rainToSnowShowers.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
};

export default rainToSnowShowers;
