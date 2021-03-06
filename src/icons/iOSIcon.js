import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "65.989",
  height = "74.368",
  className = "",
  viewBox = "0 0 65.989 74.368"
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
    <g id="iOS_Icon" data-name="iOS Icon" transform="translate(-997.332)">
      <path id="Path_6259" data-name="Path 6259" d="M1063.32,50.4c-7.262,2.434-10.894,6.943-11.133,13.847-.239,6.784,3.472,11.971,10.654,15.044-2.873,6.265-6.265,12.211-11.373,16.959-3.192,2.953-6.9,3.671-10.814,1.756a17.9,17.9,0,0,0-16.919.08,8.613,8.613,0,0,1-8.7-.479c-5.148-3.073-8.819-7.542-11.812-12.61-4.789-8.021-7.183-16.56-5.188-25.977,1.915-9.138,8.34-15.962,17.079-17.4,2.314-.4,4.828.279,7.183.678a13.053,13.053,0,0,1,3.512,1.357,12.869,12.869,0,0,0,12.849-.439c6.664-3.831,12.889-2.035,18.715,2A63.964,63.964,0,0,1,1063.32,50.4Z" transform="translate(0 -24.698)" fill={fill}/>
      <path id="Path_6260" data-name="Path 6260" d="M1095.262,0c1.4,8.22-7.542,17.278-15.722,16.121C1077.744,9.218,1086.364.319,1095.262,0Z" transform="translate(-49.26)" fill={fill}/>
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