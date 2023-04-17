import React from 'react';
import possibilityImage from "../../pictures/Tillväxt.png"
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Accelerera din marknadsföringsframgång med vår tillväxtprocces
      <br /> WavesMarketing@gmail.com <br /> 076-262 63 38
      </p>
    </div>
  </div>
);

export default Possibility;
