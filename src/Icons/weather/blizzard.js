import React from 'react';
import PropTypes from 'prop-types';
import { supportingArrays } from 'react-style-proptype';
import { Svg, Path } from 'svgs';

import { LIGHT_GREY } from '../../constants';

/**
 * blizzard icon component
 * @param {!Object} props - components props
 * @param {number} props.size - icon size
 * @param {string} props.fill - icon fill modifier
 * @param {string} props.viewBox - viewBox
 * @param {string} props.className - modifier class name
 * @param {(style|Object)} props.style - style override
 * @returns {JSX}
 */
const blizzard = ({
  width, height, fill, viewBox, className, style,
}) => (
  <Svg width={width} height={height} viewBox={viewBox} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <Path d="M167.886 110.364a3.07 3.07 0 0 1 4.213 1.12 3.06 3.06 0 0 1-1.13 4.202l-9.814 5.675 5.035 2.208a3.101 3.101 0 0 1 1.579 4.075 3.09 3.09 0 0 1-2.827 1.834c-.416 0-.843-.085-1.237-.266l-9.163-4.032-16.299 9.408 16.299 9.418 9.163-4.042a3.09 3.09 0 0 1 4.064 1.578 3.09 3.09 0 0 1-1.58 4.064l-5.034 2.22 9.814 5.663a3.094 3.094 0 0 1 1.13 4.213 3.1 3.1 0 0 1-2.666 1.536 2.983 2.983 0 0 1-1.547-.416l-9.803-5.664.587 5.462a3.089 3.089 0 0 1-2.73 3.402c-.118.011-.225.011-.331.011a3.073 3.073 0 0 1-3.062-2.741l-1.077-9.952-16.299-9.408v18.826l8.064 5.91a3.075 3.075 0 0 1 .672 4.31 3.087 3.087 0 0 1-2.485 1.247c-.64 0-1.27-.192-1.813-.587l-4.438-3.253v11.339a3.091 3.091 0 0 1-3.082 3.082 3.084 3.084 0 0 1-3.083-3.082v-11.339l-4.437 3.253a3.092 3.092 0 0 1-4.31-.66 3.085 3.085 0 0 1 .672-4.31l8.075-5.91v-18.826l-16.47 9.504-1.087 9.952a3.072 3.072 0 0 1-3.051 2.752c-.107 0-.224-.01-.341-.022-1.686-.192-2.912-1.706-2.731-3.392l.597-5.472-9.642 5.568a3.138 3.138 0 0 1-1.536.416 3.104 3.104 0 0 1-2.678-1.536 3.085 3.085 0 0 1 1.13-4.213l9.644-5.568-5.024-2.219a3.086 3.086 0 0 1-1.58-4.064 3.09 3.09 0 0 1 4.065-1.578l9.152 4.042 16.47-9.504-16.47-9.514-9.152 4.042a3.044 3.044 0 0 1-1.237.267 3.1 3.1 0 0 1-2.827-1.845 3.09 3.09 0 0 1 1.579-4.064l5.034-2.219-9.653-5.568a3.072 3.072 0 0 1-1.12-4.213 3.07 3.07 0 0 1 4.203-1.12l9.642 5.568-.597-5.462a3.096 3.096 0 0 1 2.73-3.402 3.102 3.102 0 0 1 3.403 2.73l1.088 9.952 16.459 9.515v-19.019l-8.075-5.909a3.085 3.085 0 0 1 3.637-4.981l4.438 3.242V91.462a3.084 3.084 0 0 1 3.083-3.082 3.091 3.091 0 0 1 3.082 3.082v11.136l4.427-3.242a3.085 3.085 0 0 1 4.31.672 3.074 3.074 0 0 1-.673 4.298l-8.064 5.92v19.02l16.299-9.42 1.077-9.952c.192-1.696 1.728-2.922 3.403-2.73a3.09 3.09 0 0 1 2.73 3.402l-.597 5.462 9.803-5.664zm66.676-4.443c0 2.048-.139 4.096-.416 6.123-.256 2.005-.672 4-1.195 5.941A48.968 48.968 0 0 1 231 123.67a47.826 47.826 0 0 1-2.666 5.334 47.05 47.05 0 0 1-3.328 4.938 48.03 48.03 0 0 1-3.958 4.491 46.852 46.852 0 0 1-4.533 3.957c-5.333 4.086-11.52 7.403-18.24 8.352-3.712.523-7.499.3-11.243.3h-4.949c-2.773-.214-5.013-2.56-5.013-5.334 0-2.88 2.24-5.12 5.013-5.334h14.72c.853-.106 1.6-.32 2.347-.64a32.9 32.9 0 0 0 5.013-2.026c12.16-6.187 19.627-18.347 19.627-31.787 0-18.88-14.614-34.56-33.28-35.627-2.56-.213-4.8-2.346-5.12-4.8-2.667-19.093-19.2-33.493-38.4-33.493-16.214 0-30.934 10.347-36.48 25.6-.534 1.387-1.814 2.667-3.2 3.2-1.6.533-3.2.427-4.694-.32-3.733-1.92-7.893-2.987-12.16-2.987-14.506 0-26.24 11.734-26.24 26.134 0 2.986-2.56 5.546-5.546 5.546l-.64-.106c-14.4 0-26.027 11.84-26.027 26.24 0 12.906 9.28 23.786 21.973 25.92 1.6.213 2.987.32 4.16.32h21.76c2.987 0 5.334 2.346 5.334 5.333s-2.347 5.333-5.334 5.333H58.03c-.747 0-1.28 0-1.92-.106-.854 0-1.707-.107-2.454-.214h-.32c-.33 0-.64 0-.96-.106-.32 0-.533-.107-.96-.107-.533-.107-1.173-.32-1.813-.427-.533-.106-1.067-.213-1.493-.426-15.68-4.587-26.774-18.88-26.774-35.52 0-18.667 14.08-34.454 32.427-36.694 2.56-17.92 18.24-31.893 36.693-31.893 4.054 0 8.214.747 12.054 2.133 8.426-16.746 25.706-27.52 44.48-27.52 23.146 0 43.2 16.214 48.213 38.72 22.507 3.414 39.36 22.934 39.36 45.867zM142.94 209.278l1.121.518c.432.172.69.517.863.863.173.431.173.862 0 1.294-.345.776-1.38 1.122-2.157.776l-3.279-1.466-5.436 3.192 5.436 3.107 3.279-1.467a1.683 1.683 0 0 1 1.294 0c.345.172.69.431.863.863.173.345.173.776 0 1.208-.086.431-.431.69-.863.862l-1.121.518 3.02 1.812c.431.173.69.518.776.95.086.43.086.862-.172 1.207-.432.777-1.467 1.036-2.244.604l-3.02-1.725.173 1.208c.086.949-.518 1.725-1.467 1.812h-.173c-.776 0-1.467-.604-1.553-1.467l-.431-3.538-5.437-3.193v6.3l2.934 2.157c.345.258.604.604.604 1.035.087.431 0 .863-.259 1.208-.517.69-1.553.863-2.243.345l-1.036-.776v3.537c0 .863-.69 1.64-1.639 1.64-.863 0-1.553-.777-1.553-1.64v-3.537l-1.036.776a1.497 1.497 0 0 1-1.208.26c-.431 0-.776-.26-1.035-.605-.259-.345-.432-.777-.345-1.208.086-.431.345-.777.69-1.035l2.934-2.158v-6.299l-5.523 3.193-.431 3.624c-.086.777-.777 1.467-1.553 1.467-.087 0-.173 0-.26-.086-.344 0-.776-.26-1.035-.518-.258-.345-.345-.777-.345-1.208l.173-1.294-3.02 1.725c-.69.432-1.726.173-2.157-.604-.518-.776-.173-1.725.604-2.157l2.933-1.726-1.121-.517c-.432-.173-.777-.518-.863-.863a1.683 1.683 0 0 1 0-1.294c.345-.777 1.294-1.122 2.157-.777l3.279 1.467 5.522-3.193-5.522-3.192-3.279 1.466a1.69 1.69 0 0 1-2.157-.862c-.173-.346-.173-.777 0-1.208.086-.432.431-.69.863-.863l1.121-.518-2.933-1.726c-.777-.431-1.122-1.467-.604-2.243.431-.777 1.38-1.036 2.157-.604l3.02 1.725-.173-1.208c-.086-.862.518-1.725 1.467-1.812.863 0 1.64.518 1.726 1.467l.431 3.624 5.523 3.107v-6.3l-2.934-2.156c-.777-.518-.863-1.554-.345-2.244.259-.345.604-.604 1.035-.69.345-.087.863.086 1.208.345l1.036.69v-3.365c0-.95.69-1.64 1.553-1.64.95 0 1.64.69 1.64 1.64v3.365l1.035-.69c.345-.259.776-.432 1.208-.345.431.086.777.345 1.035.69.518.69.346 1.726-.345 2.244l-2.934 2.157v6.299l5.437-3.107.431-3.624c0-.431.259-.776.604-1.035.259-.345.69-.432 1.122-.345.949.086 1.553.863 1.467 1.725l-.173 1.295 3.106-1.812c.346-.173.777-.26 1.208-.087.432.087.777.346.95.69.172.26.258.518.258.864 0 .086-.086.258-.086.431-.086.345-.345.69-.776.95l-3.02 1.725zm80.514-23.389a2.126 2.126 0 0 1 2.917.776 2.12 2.12 0 0 1-.783 2.91l-6.795 3.93 3.486 1.528a2.147 2.147 0 0 1 1.094 2.822 2.14 2.14 0 0 1-1.958 1.27c-.288 0-.583-.059-.857-.185l-6.344-2.792-11.286 6.515 11.286 6.522 6.344-2.8a2.14 2.14 0 0 1 2.815 1.094 2.14 2.14 0 0 1-1.094 2.814l-3.486 1.536 6.795 3.922c1.02.59 1.367 1.89.783 2.918a2.146 2.146 0 0 1-1.846 1.063c-.37 0-.739-.089-1.071-.288l-6.788-3.922.406 3.782a2.139 2.139 0 0 1-1.89 2.356c-.082.007-.156.007-.23.007a2.128 2.128 0 0 1-2.12-1.898l-.745-6.891-11.286-6.515V219.4l5.584 4.092a2.13 2.13 0 0 1 .465 2.984 2.137 2.137 0 0 1-1.72.864c-.444 0-.88-.133-1.257-.407l-3.072-2.252v7.851a2.14 2.14 0 0 1-2.135 2.135 2.136 2.136 0 0 1-2.134-2.135v-7.851l-3.073 2.252a2.141 2.141 0 0 1-2.984-.457 2.136 2.136 0 0 1 .465-2.984l5.592-4.092v-13.037l-11.404 6.581-.754 6.892a2.127 2.127 0 0 1-2.348 1.89 2.141 2.141 0 0 1-1.891-2.348l.413-3.79-6.677 3.856c-.34.192-.709.288-1.063.288a2.15 2.15 0 0 1-1.854-1.063 2.136 2.136 0 0 1 .783-2.918l6.677-3.855-3.48-1.537a2.137 2.137 0 0 1-1.092-2.814 2.14 2.14 0 0 1 2.814-1.093l6.337 2.8 11.404-6.582-11.404-6.588-6.337 2.8c-.28.125-.576.184-.857.184-.82 0-1.603-.48-1.957-1.278a2.14 2.14 0 0 1 1.093-2.814l3.486-1.536-6.684-3.856a2.127 2.127 0 0 1-.776-2.917 2.125 2.125 0 0 1 2.91-.776l6.677 3.856-.413-3.782a2.144 2.144 0 0 1 1.89-2.356 2.148 2.148 0 0 1 2.357 1.89l.753 6.892 11.397 6.588v-13.169l-5.592-4.092a2.136 2.136 0 0 1 2.519-3.45l3.073 2.246v-7.71c0-1.175.953-2.135 2.134-2.135a2.14 2.14 0 0 1 2.135 2.134v7.711l3.065-2.245a2.136 2.136 0 0 1 2.984.465 2.128 2.128 0 0 1-.465 2.977l-5.584 4.099v13.17l11.286-6.523.746-6.89c.133-1.175 1.196-2.024 2.356-1.892a2.14 2.14 0 0 1 1.89 2.357l-.413 3.781 6.788-3.922zM90.53 193.121l1.491.689c.574.23.918.688 1.148 1.147.23.574.23 1.148 0 1.721-.46 1.033-1.836 1.492-2.869 1.033l-4.36-1.95-7.23 4.245 7.23 4.13 4.36-1.95a2.238 2.238 0 0 1 1.721 0c.46.23.918.574 1.148 1.148.23.459.23 1.032 0 1.606-.115.574-.574.918-1.148 1.148l-1.491.688 4.016 2.41c.574.23.918.688 1.033 1.262.114.574.114 1.148-.23 1.607-.574 1.032-1.95 1.377-2.983.803l-4.017-2.295.23 1.606c.115 1.263-.689 2.295-1.95 2.41h-.23c-1.033 0-1.951-.803-2.066-1.95l-.574-4.705-7.229-4.246v8.377l3.902 2.868c.459.345.803.804.803 1.377.115.574 0 1.148-.344 1.607-.689.918-2.066 1.147-2.984.459l-1.377-1.033v4.705c0 1.147-.918 2.18-2.18 2.18-1.147 0-2.065-1.033-2.065-2.18v-4.705l-1.377 1.033c-.46.344-1.033.459-1.607.344-.574 0-1.033-.344-1.377-.803-.344-.46-.574-1.033-.459-1.607.115-.573.46-1.032.918-1.377l3.902-2.868v-8.377l-7.344 4.246-.574 4.82c-.115 1.032-1.033 1.95-2.066 1.95-.114 0-.23 0-.344-.115-.459 0-1.033-.344-1.377-.688-.344-.46-.459-1.033-.459-1.607l.23-1.721-4.017 2.295c-.917.574-2.294.23-2.868-.803-.689-1.033-.23-2.295.803-2.87l3.901-2.294-1.491-.689c-.574-.23-1.033-.688-1.148-1.147a2.238 2.238 0 0 1 0-1.721c.46-1.033 1.721-1.492 2.869-1.033l4.36 1.95 7.344-4.245-7.344-4.246-4.36 1.951a2.246 2.246 0 0 1-2.869-1.147c-.23-.46-.23-1.033 0-1.607.115-.574.574-.918 1.148-1.147l1.491-.689-3.901-2.295c-1.033-.574-1.492-1.95-.803-2.983.574-1.033 1.836-1.377 2.868-.804l4.017 2.295-.23-1.606c-.115-1.148.689-2.295 1.95-2.41 1.148 0 2.181.689 2.296 1.95l.574 4.82 7.344 4.131v-8.376l-3.902-2.87c-1.033-.688-1.147-2.065-.459-2.983.344-.459.803-.803 1.377-.918.46-.114 1.148.115 1.607.46l1.377.917v-4.475c0-1.262.918-2.18 2.065-2.18 1.262 0 2.18.918 2.18 2.18v4.475l1.377-.918c.46-.344 1.033-.573 1.607-.459.573.115 1.032.46 1.377.918.688.918.459 2.295-.46 2.984l-3.9 2.869v8.376l7.228-4.13.574-4.82c0-.574.344-1.033.803-1.377.345-.46.918-.574 1.492-.46 1.262.116 2.066 1.148 1.95 2.296l-.229 1.721 4.131-2.41c.46-.23 1.033-.344 1.607-.114.574.114 1.033.459 1.262.918.23.344.344.688.344 1.147 0 .115-.114.344-.114.574-.115.459-.46.918-1.033 1.262l-4.016 2.295z" fill={`${fill || LIGHT_GREY}`} />
  </Svg>
);

blizzard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, supportingArrays]),
};

export default blizzard;
