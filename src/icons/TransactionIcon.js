import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#454955",
  width = "24.232",
  height = "24.431",
  className = "",
  viewBox = "0 0 24.232 24.431"
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
    <g id="Transaction_Icon" data-name="Transaction Icon" transform="translate(-353.824 -2422.281)">
    <path id="Path_726" data-name="Path 726" d="M362.2,2716.748v2.776l-7.415-5.565.016-.079h19.771a1.252,1.252,0,0,0,1.451-1.263c.007-.049.017-.1.029-.161h2.908a8.46,8.46,0,0,1-.173,1.087,4.26,4.26,0,0,1-3.338,3.149,4.369,4.369,0,0,1-.953.042q-6.012,0-12.024,0C362.405,2716.735,362.336,2716.741,362.2,2716.748Z" transform="translate(-0.906 -272.812)" fill={fill}/>
    <path id="Path_727" data-name="Path 727" d="M353.824,2429.315a4.462,4.462,0,0,1,2.188-3.756,3.946,3.946,0,0,1,2.106-.57q6.042,0,12.084,0h.384v-2.646l.08-.063,7.336,5.511-.022.085H358.087a1.2,1.2,0,0,0-1.3,1.118c-.032.266-.139.328-.38.325C355.563,2429.309,354.718,2429.315,353.824,2429.315Z" transform="translate(0 0)" fill={fill}/>
    <path id="Path_728" data-name="Path 728" d="M397.346,2553.4c-.007.079-.017.136-.017.195,0,2.832,0,5.663-.005,8.495,0,.3.125.372.394.37,1.236-.008,2.473,0,3.709,0h3.1c-.123-.154-.192-.249-.269-.337a5.263,5.263,0,0,1,.085-6.711,2.892,2.892,0,0,1,4.194-.257,5.19,5.19,0,0,1,.348,7c-.073.081-.131.175-.215.288h7.355V2553.4Zm4.868,7.556h-3.39v-1.884h.558v1.309h2.831Zm-.026-5.55h-2.313c-.484,0-.484,0-.484.5,0,.306,0,.613,0,.939h-.569v-2.051h2.936C402.27,2554.8,402.3,2554.843,402.188,2555.4Zm12.459,5.553H411.2v-.562h2.766v-1.322h.681Zm.025-5.794c-.021.554-.006,1.109-.006,1.692h-.684V2555.4H411.2c-.008-.1-.01-.17-.019-.237-.039-.275.054-.384.355-.378q1.387.029,2.775,0C414.608,2554.781,414.683,2554.88,414.673,2555.162Z" transform="translate(-40.897 -123.271)" fill={fill}/>
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
