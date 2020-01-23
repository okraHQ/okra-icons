import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "75",
  height = "64.889",
  className = "",
  viewBox = "0 0 75 64.889"
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
    <path id="Vue_Icon" data-name="Vue Icon" d="M504.525,60.251c-.755,1.207-1.509,2.49-2.188,3.7q-17.43,30.106-34.784,60.211c-.151.226-.3.453-.528.83C454.5,103.334,442.125,81.83,429.6,60.175c.3,0,.528-.075.755-.075h27.389a1.068,1.068,0,0,1,1.056.679c2.565,4.527,5.206,9.054,7.847,13.581a6.641,6.641,0,0,1,.453.755,2.633,2.633,0,0,1,.453-.679c2.641-4.527,5.282-9.054,7.847-13.581a1.01,1.01,0,0,1,1.056-.6H504.6C504.525,60.175,504.525,60.251,504.525,60.251Z" transform="translate(-429.6 -60.1)" fill={fill}/>
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

