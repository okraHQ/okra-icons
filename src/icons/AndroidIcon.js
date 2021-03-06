import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "63.392",
  height = "74.996",
  className = "",
  viewBox = "0 0 63.392 74.996"
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
    <g id="Android_Icon" data-name="Android Icon" transform="translate(-787.3 -10.396)">
    <g id="Group_2631" data-name="Group 2631" transform="translate(787.3 10.396)">
      <g id="Group_2630" data-name="Group 2630" fill={fill}>
        <path id="Path_6271" data-name="Path 6271" d="M791.941,56.5a4.683,4.683,0,0,0-4.641,4.588V80.443a4.624,4.624,0,0,0,7.911,3.27,4.455,4.455,0,0,0,1.318-3.27V61.088a4.387,4.387,0,0,0-1.371-3.217A4.2,4.2,0,0,0,791.941,56.5Z" transform="translate(-787.3 -32.186)" />
        <path id="Path_6272" data-name="Path 6272" d="M808.2,88.108a4.941,4.941,0,0,0,1.424,3.533,4.77,4.77,0,0,0,3.534,1.424h3.323l.053,10.231a4.615,4.615,0,0,0,9.229,0V93.066h6.223V103.3a4.641,4.641,0,0,0,9.282,0V93.066h3.375a4.864,4.864,0,0,0,4.9-4.957V58.1H808.2Z" transform="translate(-797.178 -32.942)" />
        <path id="Path_6273" data-name="Path 6273" d="M839.01,17.307l3.217-5.907a.583.583,0,0,0-.211-.9.632.632,0,0,0-.9.264L837.9,16.727a22.619,22.619,0,0,0-18.142,0l-3.217-5.959a.6.6,0,0,0-.9-.264.583.583,0,0,0-.211.9l3.217,5.907a20.022,20.022,0,0,0-7.753,6.909,17.6,17.6,0,0,0-2.9,9.7h41.663a17.178,17.178,0,0,0-2.9-9.7A20.8,20.8,0,0,0,839.01,17.307ZM820.5,25.9a1.6,1.6,0,0,1-1.213.527,1.527,1.527,0,0,1-1.213-.527,1.76,1.76,0,0,1-.475-1.213,1.671,1.671,0,0,1,.475-1.213,1.659,1.659,0,0,1,2.426,0,1.6,1.6,0,0,1,.527,1.213A1.685,1.685,0,0,1,820.5,25.9Zm18.986,0a1.659,1.659,0,0,1-2.426,0,1.6,1.6,0,0,1-.527-1.213,1.527,1.527,0,0,1,.527-1.213,1.817,1.817,0,0,1,1.213-.527,1.527,1.527,0,0,1,1.213.527,1.76,1.76,0,0,1,.475,1.213A1.858,1.858,0,0,1,839.485,25.9Z" transform="translate(-797.083 -10.396)" />
        <path id="Path_6274" data-name="Path 6274" d="M897.858,57.818a4.455,4.455,0,0,0-3.27-1.318,4.337,4.337,0,0,0-3.217,1.318A4.418,4.418,0,0,0,890,61.088V80.443a4.615,4.615,0,0,0,9.229,0V61.088A4.418,4.418,0,0,0,897.858,57.818Z" transform="translate(-835.838 -32.186)" />
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

