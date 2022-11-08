import React from "react";
import CV from "./CV";
import './Header.scss';
import avatar from '../../Assets/images/avatar-removebg.png';
import HeaderSocials from "./HeaderSocials";
export default function Header() {
  return <>
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Thinh Doan</h2>
        <h5 className="text-light">Fontend developer</h5>
        <CV />
        <HeaderSocials />
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  </>
}
