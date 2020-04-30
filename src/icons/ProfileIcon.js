import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "13.955",
  height = "22.275",
  className = "",
  viewBox = "0 0 13.955 22.275"
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
    <g id="Profile_Icon" data-name="Profile Icon" transform="translate(0)">
    <path id="Path_770" data-name="Path 770" d="M1672.288,4986.054c-.746-.132-1.5-.234-2.237-.4a6.025,6.025,0,0,1-2.818-1.377,2.4,2.4,0,0,1-.875-1.774,9.389,9.389,0,0,1,3.185-7.514,5.582,5.582,0,0,1,7.954.323,9.655,9.655,0,0,1,2.815,7.091,2.626,2.626,0,0,1-1.264,2.188,8.691,8.691,0,0,1-4.14,1.374c-.178.022-.355.062-.532.093Z" transform="translate(-1666.358 -4963.779)" fill={fill}/>
    <path id="Path_771" data-name="Path 771" d="M1699.141,4876a4,4,0,0,1,2.624,1.376,4.152,4.152,0,1,1-6.375,5.318,4.034,4.034,0,0,1,.609-5.819A4.394,4.394,0,0,1,1699.141,4876Z" transform="translate(-1691.633 -4875.977)" fill={fill}/>
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
