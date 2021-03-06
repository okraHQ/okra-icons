import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "69.811",
  height = "75",
  className = "",
  viewBox = "0 0 69.811 75"
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
    <g id="Angular_Icon" data-name="Angular Icon" transform="translate(-100.8 -10.45)">
    <path id="Path_6267" data-name="Path 6267" d="M100.8,22.823l11.538-4.136c7.547-2.685,15.094-5.443,22.642-8.128a2.014,2.014,0,0,1,1.306,0c11.176,3.991,22.279,7.983,33.454,11.974.29.073.508.218.871.29-.218,1.814-.363,3.556-.581,5.37-.653,5.951-1.379,11.974-2.1,17.925-.653,5.951-1.379,11.829-2.032,17.779-.145,1.524-.363,2.975-.508,4.5a1.363,1.363,0,0,1-.8,1.161q-14.151,7.837-28.157,15.675a1.087,1.087,0,0,1-1.306,0C125.981,80.152,116.91,75,107.694,69.993a3.053,3.053,0,0,1-1.742-2.685c-.581-5.443-1.234-10.958-1.887-16.4-.653-5.37-1.234-10.74-1.887-16.183-.435-3.628-.8-7.184-1.234-10.813C100.873,23.621,100.873,23.258,100.8,22.823Zm34.906-4.209c-7.329,16.473-14.586,32.729-21.843,49.057h7.765c.218,0,.581-.363.653-.653,1.306-3.193,2.612-6.386,3.846-9.652a1.031,1.031,0,0,1,1.089-.726H144.2a1.119,1.119,0,0,1,1.161.726c1.234,3.193,2.54,6.386,3.774,9.579a.949.949,0,0,0,1.016.726c1.451-.073,2.975,0,4.427,0h3.048C150.219,51.343,143.035,35.087,135.706,18.614Z" transform="translate(0 0)" fill={fill}/>
    <path id="Path_6268" data-name="Path 6268" d="M140.1,59.012c2.1-5.08,4.209-10.087,6.386-15.312,2.177,5.225,4.282,10.232,6.386,15.312Z" transform="translate(-10.78 -9.121)" fill={fill}/>
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
