import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "75.409",
  height = "75.439",
  className = "",
  viewBox = "0 0 75.409 75.439"
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
    <g id="Ionic_Icon" data-name="Ionic Icon" transform="translate(-279.541 -40.302)">
    <path id="Path_6264" data-name="Path 6264" d="M335.251,45.029a12.511,12.511,0,0,0-3.367,3.654c-.287.5-.5,1-.788,1.5-.143.287-.215.287-.5.215a30.439,30.439,0,0,0-7.451-2.508,30.108,30.108,0,0,0-25.075,6.233,29.238,29.238,0,0,0-10.675,16.836,30.025,30.025,0,0,0,6.448,27.081,29.583,29.583,0,0,0,17.7,10.317,30.854,30.854,0,0,0,35.679-23,29.99,29.99,0,0,0-1.5-19.057c-.143-.43-.072-.573.287-.716a11.433,11.433,0,0,0,4.943-3.511c.287-.358.358-.215.5.072a37.718,37.718,0,0,1-.931,33.6,37.545,37.545,0,0,1-14.9,15.189,36.076,36.076,0,0,1-12.681,4.37,37.721,37.721,0,0,1-42.628-29.8,35.24,35.24,0,0,1-.716-9.1,37.717,37.717,0,0,1,55.381-31.667C335.107,44.958,335.107,44.958,335.251,45.029Z" fill={fill}/>
    <path id="Path_6265" data-name="Path 6265" d="M325.395,103.517a17.159,17.159,0,1,1,17.123-17.123A17.2,17.2,0,0,1,325.395,103.517Z" transform="translate(-8.127 -8.194)" fill={fill}/>
    <path id="Path_6266" data-name="Path 6266" d="M363.509,65.118a7.809,7.809,0,1,1,7.809-7.809A7.737,7.737,0,0,1,363.509,65.118Z" transform="translate(-21.596 -2.608)" fill={fill}/>
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
