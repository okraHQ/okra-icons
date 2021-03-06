import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "23.61",
  height = "24.63",
  className = "",
  viewBox = "0 0 23.61 24.63"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Wallet_Icon" data-name="Wallet Icon" transform="translate(127 166.875)">
    <path id="Path_6108" data-name="Path 6108" d="M-127-139.838v-14.706c.02-.052.042-.1.06-.157a.775.775,0,0,1,.878-.584,1.516,1.516,0,0,1,.488.148c.8.391,1.6.793,2.4,1.192,3.478,1.739,6.959,3.469,10.43,5.221a2.558,2.558,0,0,1,1.481,2.4c.014,4.663,0,9.327.008,13.99a1.043,1.043,0,0,1-.639,1.1h-.394c-.157-.067-.318-.127-.47-.2q-6.356-3.175-12.712-6.35a2.417,2.417,0,0,1-1.085-1A10.516,10.516,0,0,1-127-139.838Zm12.6-1.058a3.082,3.082,0,0,0-.437-1.638,1.5,1.5,0,0,0-.831-.691,1.237,1.237,0,0,0-1.44.674,3.069,3.069,0,0,0,.016,3.306,1.237,1.237,0,0,0,2.232,0A3.035,3.035,0,0,0-114.4-140.9Z" transform="translate(0 -11.015)" fill={fill}/>
    <path id="Path_6109" data-name="Path 6109" d="M-52.893-166.875h18.225a1.588,1.588,0,0,1,1.723,1.709q0,6.959,0,13.918a1.568,1.568,0,0,1-1.674,1.677q-2.177,0-4.353,0c-.08,0-.159-.007-.251-.012v-7.844h3.118v-1.587h-.266c-1,0-2,0-3,0a.3.3,0,0,1-.318-.193,4.24,4.24,0,0,0-2.011-2.012c-.526-.248-1.041-.517-1.561-.778a.538.538,0,0,1-.2-.154h7.353v-1.591h-.264q-5.054,0-10.109,0a1.146,1.146,0,0,1-.49-.112q-2.861-1.418-5.714-2.852c-.077-.039-.152-.083-.228-.125Z" transform="translate(-70.445)" fill={fill}/>
  </g>
  </svg>
);

SVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object
}

export default SVG;

