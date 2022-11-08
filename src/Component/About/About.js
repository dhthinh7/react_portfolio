import React from "react";
import { FiUsers } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';
import avatar_me from '../../Assets/images/avatar.png';
import './About.scss'
export default function About() {
  return <section>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, qui. Laborum accusantium tempore mollitia odit, pariatur provident libero inventore praesentium vitae, eos fuga magni similique reprehenderit iure numquam labore minima? Laborum accusantium tempore mollitia odit</p>
        <div className="btn btn-primary">Let's talk</div>
      </div>
    </div>
  </section>
}
