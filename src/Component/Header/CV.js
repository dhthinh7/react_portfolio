import React, { useState } from "react";
import { TbFileCertificate } from "react-icons/tb";
import certificate from '../../Assets/CV/react_cirtificate.pdf';
import avatar from '../../Assets/images/avatar-removebg.png';


export default function CV() {
  return <div className="cv-coordinates">
    <div className="cv-avatar">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="cv">
      <a href={certificate} className="btn cv-electron electron_active electron--cv" download>CV</a>
      <a href={certificate} className="btn cv-electron electron_active electron--certificate" download><TbFileCertificate /></a>
    </div>
  </div>
}
