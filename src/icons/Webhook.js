import React from "react";

const SVG = ({
  style = {},
  fill = "#d6d6e0",
  width = "22.43",
  height = "25.176",
  className = "",
  viewBox = "0 0 22.43 25.176"
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
    <path id="Webhook_Icon" data-name="Webhook Icon" d="M4082,1141.214c-3.443-1.911-6.881-3.831-10.334-5.723a1.293,1.293,0,0,1-.757-1.3q.035-6.042,0-12.085a1.173,1.173,0,0,1,.743-1.229q4.857-2.3,9.69-4.646a1.662,1.662,0,0,1,1.556,0q4.837,2.34,9.689,4.649a1.136,1.136,0,0,1,.749,1.162q-.026,6.137,0,12.274a1.164,1.164,0,0,1-.7,1.14q-5.2,2.864-10.386,5.758Zm.95-10.954a12.235,12.235,0,0,1-1.077-.975c-.123-.138-.084-.419-.12-.634.217.031.5-.013.637.108a11.975,11.975,0,0,1,.971,1.058l.7-.577a2.053,2.053,0,0,1,.618,1.938c-.105.465.089.633.451.8a4.641,4.641,0,0,0,6.548-3.811c.114-1.607.061-3.225.079-4.838,0-.053-.049-.106-.091-.192-.2.1-.379.2-.559.3-1.668.923-3.333,1.851-5,2.77-.56.307-1.035.219-1.244-.236-.243-.529.007-.871.472-1.126q2.2-1.212,4.4-2.438c.344-.191.684-.387,1.066-.6-.133-.083-.2-.133-.271-.168-2.662-1.279-5.32-2.566-7.994-3.818a1.149,1.149,0,0,0-.863.024c-2.521,1.184-5.027,2.4-7.537,3.608-.142.069-.276.155-.528.3,1.714.539,2.7,1.81,3.746,3a.737.737,0,0,0,.8.284,2.759,2.759,0,0,1,3.117,1.422l-5.174,3a2.857,2.857,0,0,1,.38-3.444c-1.167-1.2-2.045-2.719-3.924-2.935a1.625,1.625,0,0,0-.05.247c0,3.482-.012,6.964.01,10.445a.863.863,0,0,0,.4.6c2.646,1.493,5.305,2.961,7.963,4.431a3.885,3.885,0,0,0,.485.184c0-.945-.01-1.8,0-2.664a.768.768,0,1,1,1.535-.017c.014.251.005.5.006.755,0,.633,0,1.266,0,2.007,2.961-1.642,5.782-3.2,8.6-4.776a.553.553,0,0,0,.255-.38c.026-.642.012-1.285.012-2.016-.156.108-.225.145-.281.2a6.176,6.176,0,0,1-7.635.98,1.031,1.031,0,0,0-.687-.015,2.31,2.31,0,0,1-2.385-.552l.631-.729a3.057,3.057,0,0,1-.667-.5c-.251-.326-1-.588-.551-1.064.486-.512.735.271,1.053.513a3.066,3.066,0,0,1,.525.747Z" transform="translate(-4070.907 -1116.038)" fill={fill}/>
  </svg>
);

export default SVG;