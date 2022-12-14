import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

export default function HeaderSocials() {
  return <div className="header_socials">
    <a className="git" href="https://github.com/dhthinh7" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
    <a clasname="fb" href="https://www.facebook.com/doanhoangthinh11" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
  </div>;
}
