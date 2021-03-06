import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "22.855",
  height = "25",
  className = "",
  viewBox = "0 0 22.855 25"
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
    <g id="Account_Icon" data-name="Account Icon" transform="translate(0.045 0.039)" >
      <path id="Path_6284" data-name="Path 6284" d="M11.349,190.4c-2.361,0-4.722.006-7.083,0a4.249,4.249,0,0,1-3.422-1.455,3.577,3.577,0,0,1-.86-2.154,15.027,15.027,0,0,1,.964-6.559,5.07,5.07,0,0,1,2.238-2.781,4.081,4.081,0,0,1,2.148-.6,1.311,1.311,0,0,1,.608.162c.446.252.873.556,1.307.828a7.315,7.315,0,0,0,8.112.1,6.49,6.49,0,0,0,1-.66,1.956,1.956,0,0,1,1.785-.362,4.655,4.655,0,0,1,3.422,2.723,11.976,11.976,0,0,1,1.151,4.34,19.318,19.318,0,0,1,.071,2.8,3.768,3.768,0,0,1-3.525,3.545c-1.113.091-2.238.058-3.357.065C14.389,190.406,12.869,190.4,11.349,190.4Z" transform="translate(0 -165.441)" fill={fill}/>
      <path id="Path_6285" data-name="Path 6285" d="M86.5-.036a6.226,6.226,0,0,1,6.275,6.32A6.239,6.239,0,0,1,80.3,6.264,6.2,6.2,0,0,1,86.5-.036Z" transform="translate(-75.146)" fill={fill}/>
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