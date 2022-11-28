import React from "react";
import { VscProject } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiOutlineAntDesign } from 'react-icons/ai';
import { IoLogoCss3, IoLogoSass } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiTailwindcss, SiBootstrap, SiJirasoftware } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import avatar_me from '../../Assets/images/avatar.png';
import svn from '../../Assets/images/tortoisesvn.png';

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
              <small>2.5+ Year working</small>
            </div>
          </article>
          <article className="about_card">
            <div className="about_card-flex">
              <VscProject />
              <h5>Projects</h5>
              <small>5+ project</small>
            </div>
          </article>
        </div>
        <div className="skill_fontend">
          <h3>Developer</h3>
          <div className="skill_content">
            <article className="skill_detail">
              <div className="skill_icon react"><GrReactjs /></div>
              <h4>ReactJS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon js"><TbBrandJavascript /></div>
              <h4>JavaScript</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon html"><AiFillHtml5 /></div>
              <h4>HTML</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon css"><IoLogoCss3 /></div>
              <h4>CSS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon scss"><IoLogoSass /></div>
              <h4>SCSS</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon ant-design"><AiOutlineAntDesign /></div>
              <h4>Ant-design</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon bootstrap"><SiBootstrap /></div>
              <h4>Bootstrap</h4>
            </article>
            {/* <article className="skill_detail">
              <div className="skill_icon tailwind"><SiTailwindcss /></div>
              <h4>Tailwind</h4>
            </article> */}
            <article className="skill_detail">
              <div className="skill_icon"><DiResponsive /></div>
              <h4>Responsive</h4>
            </article>
          </div>
        </div>
        <div className="skill_softskill">
          <h3>Control</h3>
          <div className="skill_content">
            <article className="skill_detail">
              <div className="skill_icon"><AiFillGithub /></div>
              <h4>Git</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon icon_svn">
                <img src={svn} alt="svn"/>
              </div>
              <h4>SVN</h4>
            </article>
            <article className="skill_detail">
              <div className="skill_icon jira"><SiJirasoftware /></div>
              <h4>Jira</h4>
            </article>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary">Hire me</a>
      </div>
    </div>
  </section>
}
