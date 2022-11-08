import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoSass } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiCsharp, SiPython, SiCloudera, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import './Skill.scss';

export default function Skill() {
  return <section id="skill">
    <h5>What skill I have</h5>
    <h2>Skills & Experience</h2>
    <div className="container skill_container">
      <div className="skill_fontend">
        <h3>Frontend Developer</h3>
        <div className="skill_content">
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
      <div className="skill_embeddedSw">
        <h3>Embedded Software</h3>
        <div className="skill_content">
          <article className="skill_detail">
            <div className="skill_icon"><SiCloudera /></div>
            <h4>C/C++</h4>
          </article>
          <article className="skill_detail">
            <div className="skill_icon"><SiCsharp /></div>
            <h4>C#</h4>
          </article>
          <article className="skill_detail">
            <div className="skill_icon"><SiPython /></div>
            <h4>Python</h4>
          </article>
        </div>
      </div>
    </div>
  </section>
}
