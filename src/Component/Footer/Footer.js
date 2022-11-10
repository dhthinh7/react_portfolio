import React from "react";
import { AiFillMessage } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import { BsFillPhoneVibrateFill } from "react-icons/bs";

import "./Footer.scss";

export default function Footer() {
  return <footer>
    <ul className="permalinks">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://m.me/doanhoangthinh11" target="_blank" rel="noreferrer"><AiFillMessage /></a>
      <a href="https://zalo.me/841225854364" target="_blank" rel="noreferrer"><SiZalo /></a>
      <a href="tel:+84775854364"><BsFillPhoneVibrateFill/><span>+84775854364</span></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Doan Hoang Thinh. </small>
    </div>
  </footer>
}
