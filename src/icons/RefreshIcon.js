import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "100px",
  height = "100px",
  className = "",
  viewBox = "0 0 417.623 417.623"
}) => (
  <svg
    id="IconsRepoEditor"
    width={width}
    style={{enableBackground:'new 0 0 417.623 417.623',...style}}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px"
    fill={fill} stroke={fill} strokeWidth="0"
  >
    <g id="IconsRepo_bgCarrier"/> 
    <path d="M364.392,102.852c-11.658-23.833-28.316-45.167-48.793-62.283C291.029,20.03,261.504,6.001,230.219,0l-11.304,58.926 c31.258,5.996,59.184,23.792,78.272,48.778l-40.379,2.915l87.285,128.759l67.885-139.961L364.392,102.852z"/> 
    <path d="M213.738,313.002l16.844-36.917L75.737,290.936l90.267,126.688l19.797-43.391c2.924,0.135,5.849,0.227,8.768,0.227 c53.882,0,105.371-23.184,141.265-63.604l-44.865-39.84C270.759,293.773,243.333,308.52,213.738,313.002z"/> 
    <path d="M75.177,136.85l23.242,33.402l66.148-140.79L9.564,42.551L36.796,81.69C16.373,112.526,5.644,148.129,5.644,185.534 c0,21.951,3.762,43.495,11.181,64.034l56.432-20.383c-5.051-13.983-7.612-28.67-7.612-43.651 C65.644,168.561,68.907,152.14,75.177,136.85z"/> 
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