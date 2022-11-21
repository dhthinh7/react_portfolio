import React, { useEffect, useRef, useState } from "react";
import { TbFileCertificate } from "react-icons/tb";
import myCV from '../../Assets/CV/thinhdoan-resume.pdf';
import FE1 from '../../Assets/CV/FE1_Certificate.pdf';
import FE2 from '../../Assets/CV/FE2_Certificate.pdf';
import avatar from '../../Assets/images/avatar_main_no_bg.png';


export default function CV() {
  let ref = useRef();
  let [deg, setDeg] = useState(360);
  let [revert, setRevert] = useState(1)

  // Handle rotate item: 1 step = 0.5deg
  const handleRotate = (revert) => {
    setDeg(prev => {
      if (prev === 0) {
        setDeg(360);
      } else if (prev > 360) {
        setDeg(1);
      }
      return prev - 0.5 * revert
    });
  }


  const reset = () => {
    clearInterval(ref.current);
  }

  const MouseOver = () => {
    setRevert(revert * (-1))
    reset();
  }

  const MouseOut = (e) => {
    e.target.style.background = '';
    ref.current = setInterval(() => handleRotate(revert), 20);
  }
  
  useEffect(() => {
    // Call setInterval to increase/decrease ratio
    ref.current = setInterval(() => handleRotate(revert), 13)
    return () => reset();
  }, [])

  return <div className="cv-coordinates">
    <div className="cv-avatar">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="cv" style={{ transform: `rotate(${deg}deg) translate(-50%, -50%)` }} onMouseOver={MouseOver} onMouseOut={MouseOut}>
      <a href={myCV} className="btn cv-electron electron_active electron--cv" download>CV</a>
      <a href={FE1}  className="btn cv-electron electron_active electron--certificate1" download><TbFileCertificate/><span>1</span></a>
      <a href={FE2} className="btn cv-electron electron_active electron--certificate2" download><TbFileCertificate/><span>2</span></a>
    </div>
  </div>
}
