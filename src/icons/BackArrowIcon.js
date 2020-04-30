import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#fff",
  width = "42.3",
  height = "18.613",
  className = "",
  viewBox = "0 0 42.3 18.613"
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
    <g id="Group_22" data-name="Group 22" transform="translate(1.322 1.571)">
    <line id="Line_20" data-name="Line 20" x1="40.977" transform="translate(0 7.738)" fill={fill} stroke={fill} strokeWidth="1"/>
    <g id="Group_21" data-name="Group 21" transform="translate(0 0)">
      <line id="Line_21" data-name="Line 21" x1="33.544" transform="translate(6.062 7.738)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="1"/>
      <g id="Group_20" data-name="Group 20">
        <path id="Path_6108" data-name="Path 6108" d="M4181.785,1936.719c1.778-1.778,2.625-5.3,2.7-7.737a23.155,23.155,0,0,1-9.444,7.737c3.838,1.536,6.869,4.566,9.444,7.74C4184.271,1941.845,4183.633,1938.674,4181.785,1936.719Z" transform="translate(-4175.036 -1928.983)" fill={fill} stroke={fill} strokeWidth="1"/>
      </g>
    </g>
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

