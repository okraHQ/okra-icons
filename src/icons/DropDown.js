import React from "react";

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "29.943",
  height = "16.471",
  className = "",
  viewBox = "0 0 29.943 16.471"
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
    <path id="Path_6352" data-name="Path 6352" d="M-1276.8,12907.5l12.85,12.851,12.85-12.851" transform="translate(1278.921 -12905.379)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
  </svg>
);

export default SVG;