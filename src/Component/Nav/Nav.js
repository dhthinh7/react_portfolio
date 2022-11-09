import React from "react";
import { AiFillHome, AiFillContacts, AiFillProject } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

import "./Nav.scss";

export default function Nav() {
  return <div className="nav">
    <li><a href="#header"><AiFillHome /></a></li>
    <li><a href="#about"><FcAbout /></a></li>
    <li><a href="#skill"><GiSkills /></a></li>
    <li><a href="#services"><GrServices /></a></li>
    <li><a href="#portfolio"><AiFillProject /></a></li>
    <li><a href="#contact"><AiFillContacts /></a></li>
  </div>
}
