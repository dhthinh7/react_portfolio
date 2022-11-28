import React from "react";
import CV from "./CV";
import './Header.scss';
import HeaderSocials from "./HeaderSocials";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  return <>
    <header id="header">
      <div className="container header_container">
        <div className="header_infor">
          <h3>Hello I'm</h3>
          <h2>Thinh Doan</h2>
          <h5 className="text-light">Fontend developer</h5>
          <p>Frontend Developer with high responsibility in development, producing Quality work.</p>
          <HeaderSocials />
          <p className="direct">Click rotate the circle to see detail of my CV, FE certification</p>
        </div>
        <div className="header_cv">
          <CV />
        </div>
      </div>
    </header>
  </>
}
