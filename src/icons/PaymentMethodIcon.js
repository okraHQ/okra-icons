import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "25",
  height = "18.804",
  className = "",
  viewBox = "0 0 25 18.804"
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
    <g id="Payment_Method_Icon" data-name="Payment Method Icon" transform="translate(-0.031 0.046)">
    <path id="Path_6145" data-name="Path 6145" d="M144.164,121.9h-6.377a2.274,2.274,0,0,1-2.408-2.386c-.005-1.88,0-3.755,0-5.635,0-.786.028-1.578-.005-2.364A2.346,2.346,0,0,1,137.8,109.1c4.25.027,8.5.011,12.755.011a2.264,2.264,0,0,1,2.375,2.358q.008,4.041,0,8.082a2.271,2.271,0,0,1-2.358,2.353q-3.2-.008-6.4-.005Zm.1-8.071q-3.587,0-7.174-.006c-.225,0-.324.044-.324.3.011,1.8.005,3.59.005,5.388a.872.872,0,0,0,.984.979h12.947c.726,0,1.028-.308,1.028-1.045,0-1.759-.005-3.518.006-5.278,0-.291-.088-.346-.357-.346C149.013,113.832,146.638,113.826,144.268,113.826Zm-7.455-2.161h14.9c.093-.748-.253-1.149-.973-1.149H137.7A.871.871,0,0,0,136.814,111.666Z" transform="translate(-127.901 -103.144)" fill={fill}/>
    <path id="Path_6146" data-name="Path 6146" d="M17.627,4.514H13.674c-1.358,0-2.71-.011-4.068,0a3.52,3.52,0,0,0-3.453,2.76,3.819,3.819,0,0,0-.088.869q-.008,3.835-.005,7.669a3.5,3.5,0,0,0,.346,1.512c.033.071.066.148.1.22a2.191,2.191,0,0,1-2.567-1.149c-.616-1.215-1.215-2.441-1.82-3.667C1.524,11.556.941,10.374.359,9.2A2.3,2.3,0,0,1,1.48,5.85q5.649-2.8,11.3-5.58A2.293,2.293,0,0,1,16.1,1.413c.445.913.9,1.82,1.347,2.732C17.5,4.25,17.55,4.36,17.627,4.514Z" transform="translate(0)" fill={fill}/>
    <path id="Path_6147" data-name="Path 6147" d="M179.938,246.716a1.5,1.5,0,0,1,2.194-.038,1.454,1.454,0,0,1,0,2.012,1.518,1.518,0,0,1-2.2-.038,1.538,1.538,0,0,1-1.38.473,1.464,1.464,0,0,1-.764-2.485A1.5,1.5,0,0,1,179.938,246.716Z" transform="translate(-167.567 -232.73)" fill={fill}/>
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

