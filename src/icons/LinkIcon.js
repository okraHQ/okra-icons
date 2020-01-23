import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "23.678",
  height = "23.649",
  className = "",
  viewBox = "0 0 23.678 23.649"
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
    <g id="Link_Icon" data-name="Link Icon" transform="translate(-557.725 -558.224)">
      <path id="Path_6124" data-name="Path 6124" d="M702.365,564.474c.091-.1.149-.169.213-.232l4.361-4.36a5.407,5.407,0,0,1,3.955-1.658,5.476,5.476,0,0,1,5.453,4.908,5.227,5.227,0,0,1-1.49,4.4q-2.764,2.839-5.6,5.6a5.522,5.522,0,0,1-6.582.813,6.052,6.052,0,0,1-.647-.47,1.158,1.158,0,0,1-.413-1.239,1.79,1.79,0,0,1,2.6-1.3,2.413,2.413,0,0,0,3.02-.506c1.677-1.738,3.409-3.422,5.114-5.133a2.14,2.14,0,1,0-2.953-3.1c-.914.888-1.81,1.795-2.706,2.7a.345.345,0,0,1-.466.093A6.782,6.782,0,0,0,702.365,564.474Z" transform="translate(-134.982 0)" fill={fill}/>
      <path id="Path_6125" data-name="Path 6125" d="M571.461,689.821c-.068.076-.118.137-.174.193-1.373,1.373-2.737,2.756-4.122,4.117a5.483,5.483,0,0,1-8.993-1.834,5.174,5.174,0,0,1,1.08-5.8c1.737-1.848,3.556-3.622,5.376-5.39a5.517,5.517,0,0,1,6.818-.614,1.483,1.483,0,0,1,.2,2.547,1.546,1.546,0,0,1-1.967.316,2.722,2.722,0,0,0-1.692-.318,2.08,2.08,0,0,0-1.13.582c-1.708,1.706-3.421,3.408-5.12,5.124a2.137,2.137,0,0,0,3.017,3.028c.827-.8,1.632-1.623,2.442-2.441a.276.276,0,0,1,.368-.083,6.652,6.652,0,0,0,3.783.557A.512.512,0,0,1,571.461,689.821Z" transform="translate(0 -113.882)" fill={fill}/>
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
