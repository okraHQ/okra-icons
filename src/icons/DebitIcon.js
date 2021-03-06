import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#b73a5c",
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
    <path id="Path_6313" data-name="Path 6313" d="M.02,9.306a1.986,1.986,0,0,0,.824,1.006c.6.47,1.163.984,1.741,1.479q3.451,2.963,6.909,5.925a1.932,1.932,0,0,0,.932.473.708.708,0,0,0,.776-.351,1.658,1.658,0,0,0,.25-.9V13.855c0-.107.011-.178.138-.215a8.284,8.284,0,0,1,5.791.252A9.727,9.727,0,0,1,20.669,16.3a16.9,16.9,0,0,1,3.281,5.437,1.139,1.139,0,0,0,.172.3.181.181,0,0,0,.313-.007.891.891,0,0,0,.145-.333A19.426,19.426,0,0,0,25,16.807a11.6,11.6,0,0,0-2.729-7.212,12.517,12.517,0,0,0-3.755-2.933,18.74,18.74,0,0,0-6.98-2.012c-.03,0-.06-.007-.112-.011v-.2c0-1.1,0-2.193-.019-3.292a1.912,1.912,0,0,0-.164-.632A.773.773,0,0,0,10.721.1h-.3a3.558,3.558,0,0,0-.749.381C7.6,2.23,5.534,4,3.469,5.759,2.6,6.5,1.742,7.242.862,7.963A2.214,2.214,0,0,0,.02,9.051Z" transform="translate(-0.02 -0.1)" fill={fill}/>
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
