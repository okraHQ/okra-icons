import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#3ab795",
  width = "25",
  height = "22.023",
  className = "",
  viewBox = "0 0 25 22.023"
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
    <path id="Credit_icon" data-name="Credit icon" d="M25.02,9.306a1.986,1.986,0,0,1-.824,1.006c-.6.47-1.163.984-1.741,1.479Q19,14.754,15.545,17.717a1.932,1.932,0,0,1-.932.473.708.708,0,0,1-.776-.351,1.658,1.658,0,0,1-.25-.9V13.855c0-.107-.011-.178-.138-.215a8.284,8.284,0,0,0-5.791.252A9.727,9.727,0,0,0,4.37,16.3a16.9,16.9,0,0,0-3.281,5.437,1.139,1.139,0,0,1-.172.3A.181.181,0,0,1,.6,22.03.891.891,0,0,1,.459,21.7a19.427,19.427,0,0,1-.418-4.89A11.6,11.6,0,0,1,2.771,9.595,12.517,12.517,0,0,1,6.525,6.661a18.74,18.74,0,0,1,6.98-2.012c.03,0,.06-.007.112-.011v-.2c0-1.1,0-2.193.019-3.292A1.912,1.912,0,0,1,13.8.514.773.773,0,0,1,14.318.1h.3a3.558,3.558,0,0,1,.749.381C17.443,2.23,19.5,4,21.571,5.759c.865.74,1.726,1.483,2.606,2.2a2.214,2.214,0,0,1,.843,1.087Z" transform="translate(-0.02 -0.1)" fill={fill}/>
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

