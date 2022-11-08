import React from "react";
import { AiFillCheckCircle } from 'react-icons/ai';

import "./Services.scss";

export default function Services() {
  return <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services_container">
      <article className="service_item">
        <div className="service_head">
          <h3>Developer</h3>
        </div>
        <ul className="service_list">
          <li className="service_detail">
            <div className="service_icon"><AiFillCheckCircle /></div>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </li>
          <li className="service_detail">
            <div className="service_icon"><AiFillCheckCircle /></div>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </li>
          <li className="service_detail">
            <div className="service_icon"><AiFillCheckCircle /></div>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </li>
        </ul>
      </article>
    </div>
  </section>
}
