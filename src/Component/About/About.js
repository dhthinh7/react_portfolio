import React from "react";
import { VscProject } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoSass } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import avatar_me from '../../Assets/images/avatar.png';

import './About.scss'
export default function About() {
  return <section id="about" className="about-margin-top">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={avatar_me} alt="me" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <div className="about_card-flex">
              <FaAward />
              <h5>Experiences</h5>
              <small>2+ Year working</small>
            </div>
          </article>
          <article className="about_card">
            <div className="about_card-flex">
              <VscProject />
              <h5>Projects</h5>
              <small>3+ project</small>
            </div>
          </article>
        </div>
        <div className="skill_fontend">
          <h3>Developer</h3>
          <div className="skill_content">
            <article className="skill_detail">
              <div className="skill_icon"><GrReactjs /></div>
              <h4>ReactJS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><AiFillHtml5 /></div>
              <h4>HTML</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><IoLogoCss3 /></div>
              <h4>CSS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><TbBrandJavascript /></div>
              <h4>JavaScript</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><IoLogoSass /></div>
              <h4>SCSS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><SiTailwindcss /></div>
              <h4>Tailwind</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><SiBootstrap /></div>
              <h4>Bootstrap</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon"><DiResponsive /></div>
              <h4>Responsive</h4>
            </article>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary">Hire me</a>
      </div>
    </div>
  </section>
}
