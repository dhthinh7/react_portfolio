import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";
import { AiTwotoneMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { SiZalo } from 'react-icons/si';
import { notification } from 'antd';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_icoj47g", 'template_kcqu8xc', form.current, "tEm-Q3t6ePVyFnk-4")
      .then(result => {
        if (result.status === 200) {
          notification["success"]({
            message: 'Send Email',
            description: ''
          });
        }
      }).catch((error) => {
        notification["error"]({
          message: 'Send Email is not success',
          description: 'All input must be filled'
        });
      });
  }

  return <section id="contact">
    <h5>Get InTouch</h5>
    <h2>Contact me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_item">
          <div className="contact_item-icon email"><AiTwotoneMail /></div>
          <h4>Email</h4>
          <h5>dhthinh7@gmail.com</h5>
          <a href="mailto:dhthinh7@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact_item">
          <div className="contact_item-icon messenger"><BsMessenger /></div>
          <h4>Messenger</h4>
          <h5>Doan Hoang Thinh</h5>
          <a href="https://m.me/doanhoangthinh11" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact_item">
          <div className="contact_item-icon"><SiZalo /></div>
          <h4>Zalo</h4>
          <h5>Doan Hoang Thinh</h5>
          <a href="https://zalo.me/841225854364" target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>
      <form action="" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" id="" rows="10" placeholder="Your message"></textarea>
        <button type="submit" className="btn btn-primary">Send message</button>
      </form>
    </div>
  </section>
}
