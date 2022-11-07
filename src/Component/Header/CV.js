import React from "react";
import cv from '../../Assets/CV/cybersoft.pdf';

export default function CV() {
  return <>
    <div className="cv">
      <a href={cv} className="btn" download>Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  </>
}
