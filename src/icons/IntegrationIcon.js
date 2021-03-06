import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "30.928",
  height = "31.037",
  className = "",
  viewBox = "0 0 30.928 31.037"
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
    <g id="Integration_Icon" data-name="Integration Icon" transform="translate(-0.028 -0.007)">
    <path id="Path_6257" data-name="Path 6257" d="M13.605,21.651a6.169,6.169,0,0,1,.022-3.1c.029-.116.217-.224.354-.282a7.744,7.744,0,0,0,4.712-5.594A7.828,7.828,0,1,0,3.329,9.7a7.666,7.666,0,0,0,1.026,5.384c.043.065.094.13.145.2.253-.246.484-.506.744-.73.578-.484,1.041-.332,1.221.39q.607,2.4,1.185,4.8c.173.7-.152,1.019-.853.874-1.6-.332-3.2-.658-4.806-.99-.766-.159-.925-.593-.441-1.207.217-.267.463-.513.708-.788A10.825,10.825,0,0,1,1.327,5.918,10.423,10.423,0,0,1,7.976.455a10.969,10.969,0,1,1,5.63,21.2Z" transform="translate(0 0)" fill={fill}/>
    <path id="Path_6258" data-name="Path 6258" d="M132.337,129.9a6.093,6.093,0,0,1,.079,3.035c-.029.13-.21.26-.347.318a7.748,7.748,0,0,0-4.408,4.351,7.834,7.834,0,1,0,15.068,2.58,7.688,7.688,0,0,0-.954-3.4c-.058-.108-.13-.21-.238-.4-.137.159-.238.3-.354.419a4.171,4.171,0,0,1-.455.419c-.506.369-.947.224-1.091-.39-.246-1.033-.463-2.067-.694-3.1-.13-.571-.253-1.149-.376-1.72a1.674,1.674,0,0,1-.043-.275c-.051-.593.231-.846.809-.715.665.152,1.323.311,1.987.463.954.224,1.908.455,2.862.672.3.072.593.166.694.5a.79.79,0,0,1-.3.795c-.231.238-.477.47-.708.694a11,11,0,0,1-13.818,16.261,10.977,10.977,0,0,1,2.291-20.51Z" transform="translate(-114.945 -120.506)" fill={fill}/>
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
