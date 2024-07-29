import React from "react";
import spinnerGif from '../assets/spinner.gif';

const Spinner = ({ size = "40" }) => {
  return (
    <div
    className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `url(${spinnerGif}) no-repeat center center`,
        backgroundSize: 'contain',
      }}
    ></div>
  );
};

export default Spinner;