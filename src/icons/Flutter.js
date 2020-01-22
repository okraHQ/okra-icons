import React from "react";

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "60.633",
  height = "74.899",
  className = "",
  viewBox = "0 0 60.633 74.899"
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
  <g id="Flutter_Icon" data-name="Flutter Icon" transform="translate(-629.6 -20.1)">
    <path id="Path_6261" data-name="Path 6261" d="M690.023,20.1c-.14.21-.35.42-.49.629L641.7,68.564c-.14.14-.35.28-.42.35L629.6,57.235a4.488,4.488,0,0,0,.7-.42c12.1-12.029,24.2-24.127,36.226-36.156a4.224,4.224,0,0,1,.56-.559Z" fill={fill}/>
    <path id="Path_6262" data-name="Path 6262" d="M654.4,89.541a6.114,6.114,0,0,0,.7-.559c6.364-6.364,12.728-12.658,19.022-19.022a1.751,1.751,0,0,1,1.259-.559h22.169L677.408,89.541c6.784,6.784,13.5,13.427,20.281,20.211-.42,0-.629.07-.839.07H675.24a1.516,1.516,0,0,1-.979-.35c-6.574-6.5-13.078-13.078-19.651-19.581A3.639,3.639,0,0,0,654.4,89.541Z" transform="translate(-7.456 -14.823)" fill={fill}/>
  </g>
  </svg>
);

export default SVG;