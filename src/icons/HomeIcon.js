import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "22.723",
  height = "21.163",
  className = "",
  viewBox = "0 0 22.723 21.163"
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
    <g id="Home_Icon" data-name="Home Icon" transform="translate(-445.941 -466.997)">
    <path id="Path_709" data-name="Path 709" d="M536.6,619.28c-.077.006-.131.013-.185.013-1.173,0-2.346.007-3.52,0a2.338,2.338,0,0,1-2.362-2.006,2.667,2.667,0,0,1-.025-.445c0-1.763,0-3.526,0-5.289a.891.891,0,0,1,.282-.677q3.706-3.695,7.4-7.4a.656.656,0,0,1,1.064.005q3.681,3.68,7.365,7.357a.989.989,0,0,1,.317.758q-.014,2.616,0,5.233A2.355,2.355,0,0,1,546,618.8a1.986,1.986,0,0,1-1.192.472c-1.3.019-2.607.011-3.91.013a.272.272,0,0,1-.058-.021V613.5H536.6Z" transform="translate(-81.409 -131.136)" fill={fill}/>
    <path id="Path_710" data-name="Path 710" d="M468.083,478.567a1.258,1.258,0,0,1-1.525-.08c-.531-.485-1.031-1-1.54-1.514q-3.537-3.534-7.072-7.071a.8.8,0,0,0-1.289.009l-8.415,8.414a1.3,1.3,0,0,1-1.625.29,1.274,1.274,0,0,1-.393-1.919c.333-.4.719-.754,1.087-1.123q3.772-3.774,7.547-7.544a3.356,3.356,0,0,1,3.6-.833,3.08,3.08,0,0,1,1.263.8q1.132,1.133,2.264,2.266,2.2,2.21,4.415,4.413l1.765,1.764a1.589,1.589,0,0,1,.444.676A1.3,1.3,0,0,1,468.083,478.567Z" fill={fill}/>
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
