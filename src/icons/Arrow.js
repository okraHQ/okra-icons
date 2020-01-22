import React from "react";

const SVG = ({
  style = {},
  fill = "#3ab795",
  width = "34.618",
  height = "14.427",
  className = "",
  viewBox = "0 0 34.618 14.427"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Arrow" transform="translate(-33.295 1.571)">
    <line id="Line_20" data-name="Line 20" x2="30.891" transform="translate(35.7 5.644)" fill="#fff" stroke={fill} stroke-width="1"/>
    <g id="Group_21" data-name="Group 21" transform="translate(33.295 0)">
      <line id="Line_21" data-name="Line 21" x2="28.874" transform="translate(0 5.644)" fill="none" stroke={fill} stroke-miterlimit="10" stroke-width="1"/>
      <g id="Group_20" data-name="Group 20" transform="translate(26.407)">
        <path id="Path_6108" data-name="Path 6108" d="M4177,1934.626c-1.3-1.3-1.915-3.863-1.966-5.644a16.889,16.889,0,0,0,6.889,5.644,17.814,17.814,0,0,0-6.889,5.646C4175.188,1938.365,4175.654,1936.052,4177,1934.626Z" transform="translate(-4175.036 -1928.983)" fill={fill} stroke={fill} stroke-width="1"/>
      </g>
    </g>
  </g>
  </svg>
);

export default SVG;
