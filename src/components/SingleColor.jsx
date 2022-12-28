import React, { useState, useEffect } from 'react';
// import rgbToHex from '../utils/Util';

const SingleColor = ({ rgb, weight, index, hex }) => {
  console.log(index);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  //   const Hex = rgbToHex(...rgb);
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index >= 10 ? 'color-light' : ''}`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert ? <p className="alert">copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;