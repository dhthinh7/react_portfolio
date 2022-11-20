import React, { useEffect, useRef, useState } from "react";
import { TbFileCertificate } from "react-icons/tb";
import certificate from '../../Assets/CV/react_cirtificate.pdf';
import avatar from '../../Assets/images/avatar_main.png';


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
    ref.current = setInterval(() => handleRotate(revert), 13);
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
      <a href={certificate} className="btn cv-electron electron_active electron--cv" download>CV</a>
      <a href={certificate} className="btn cv-electron electron_active electron--certificate" download><TbFileCertificate /></a>
    </div>
  </div>
}
