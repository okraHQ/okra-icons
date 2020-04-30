import React from "react";
import PropTypes from 'prop-types'; 

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "72.496",
  height = "74.002",
  className = "",
  viewBox = "0 0 72.496 74.002"
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
    <g transform="translate(-0.468)">
        <path fill={fill} d="M64.871,26.3l.643.462h.6V25.61l1.892-.183,1.8,1.338h2.954l.208-.19q-.444-1.494-1-2.933l-1.927.032-.967-1.062-.187-1.707-.991.541-.531,2.086-1.43-1.522-.058-1.438-1.38-1.189-.508-.507h-1.6l.5,1.427,1.927,1.075.335.356-.418.209.019,1.131-.939.393-.8-.175-.5-.709,1.3.069.352-.475-2.888-1.948-.222-.83-1.173,1.062-1.189-.245-1.81,2.353-.357.922-1.158.1-1.713.011-1.025-.479-.3-2.035.368-.97,1.744-.381,1.9.381.233-1.052-.808-.191.275-1.639,1.914-.3,1.338-1.89,1.382-.232L61.922,15h.46l-.254-1.776-1.515.611-.534-1.327-.88-.122-.166-.909.717-.782,1.707-.669.439-.785A36.892,36.892,0,0,0,15.729,7.086L17.6,7.072l.832.46,1.567.338.122.616,2.492.092-.338-.8-2.214-.063.521-.491L20.4,6.639h-2l2.183-1.63h2.091l.983,1.354,1.631.092.983-.954L27,5.87,25.65,7.192s-1.874.034-1.782.034a6.2,6.2,0,0,1,.154,1.29L26.3,8.454l.246-.613,1.567-.093.185-.922-.922-.156.307-.83.706-.214,2.46.122L29.488,6.978l.219.952,1.414.216-.092-1.721,1.353-.708,2.4-.277,3.473,1.538V8.3l1.107.277-.555,1.046H37.237l-.465,1.2-3.579-.845,2.817-1.5-1.073-.912-2.429.307-.212.22-.008,0-.037.051-.7.727-1.157.095.092.576.4.167-.016.19-.941.134-.069.545-.9.047L28.8,9.536l-1.613.491-3.3,1.93.37,1.359.922.6,1.844.254v2.1l.853-.137.785-1.638,1.961-.621V11.359l1.091-.824,2.637.623-.185,1.662h.708l1.938-.952.093,2.181,1.411.861-.06,1.293-1.351.46L37,17.09l1.63.742-.034.891-.471.04a.129.129,0,0,0,0-.024l-2.056-.634-.087-.66h0l.6-.413v-.6l-.647-.162-.161.555L34.633,17l-.113-.037v.056l-.393.06-.32-.647-.37-.162H32.63l-.367.3v.669l.69.23.682.1-.153.068-.623.69-.273-.344-.6-.159-1.639,1.541.214.175-2.419,1.34-2.276,2.368L25.708,24.3l-2.281,1.5L22.3,26.936l.125,2.275-1.568-.73.011-1.33-4.364,0-2.26,1.144-.981,1.81-.389,1.435.635,1.391,1.781.217,2.83-1.892.248.938L17.5,33.825l2.154.368.216,3.327,2.952.5L24.7,35.854l2.276.463.8,1.112,2.183-.129.061-.645,1.2.582,1.353,2.12,2.336.032.862,1.509.122,1.844,2.584.983,3.259.034.954,1.565,1.445.463-.277,1.295-1.583,2.011-.462,4.454-1.43,1.129-2.12-.063-.706,1.229.524,2.31L35.769,61.1l-.737,1.354-2.2,1.055-1.446.22-.06.613,1.015.291-.122.661-.909.875.552.7,1.094.031-.061.843-.291.832-.093.676,1.618,1.363-.216.708-2.2-.042-2.191-1.911-1.707-3,.238-2.9L26.76,61.75l.523-2.92-.767-.214V52.282s-2.152-1.631-2.276-1.631-1.139-.277-1.139-.277l-.216-1.2-2.8-3.507.277-1.26.092-2.061L22.393,41l-.277-2.307-2.828-.212-2.214-2.522-1.568-.434-1.013-.187.122-.922-1.292-.183v.523l-3.23-.806-1.3-1.988.529-.964L7.277,28.009l-.351-2.183H6.1l.275,2.12,1.414,2.183-.154.862-1.2-.185L4.958,28.292V25.365L3.42,24.627V22.521a36.987,36.987,0,0,0,62.746,37.8H64.945v-2.46l-1.412-1.9V53.006l-1.078-1.075L62.36,50.7l1.371-2.614L61.136,43.5l.3-3.11L59.1,40.152l-.861-.861h-1.57l-.8.737H53.107l-.093.246H51.474l-3.533-4.027.029-3.137.584-.214.217-1.2h-.83l-.339-1.26,4.088-2.95V25.4l2-1.112.811.08h1.646l1.289-.692,4.152-.323v2.122ZM54.492,13.111l.338-.521,1.216-.246.3,1.477L57,14.864l.43.494.783.306-.738.878-1.43.137H54.966l.121-1.276.894-.185-.076-.6-.833-.523-.582-.4,0-.586Zm-2,2.307.738-1.184,1-.232.708.307-.064.8-1.522,1.076h-.859v-.767Zm-20.1,4.551-.771.064.042-.536.344-.43.463.364Zm2.7-.946-.526.045-.106.508-.405.253-.65.055c-.023-.153-.035-.269-.035-.269h-.253v-.547h1.06L34.4,18.5l.421-.008.481.1Z"/>
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