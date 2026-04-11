import React from "react";
import "./Footer.css";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      
      <h2>Get In <span>Touch</span></h2>

      <p className="subtitle">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          
          <div className="contact-item">
            <MdEmail size={22} className="icon" />

            <div>
              <h4>Email</h4>
              <p>lekasreek@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <MdLocationOn size={22} className="icon" />
            <div>
              <h4>Location</h4>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="socials">
            <a href="https://github.com/leka006" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/lekasree-k/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://leetcode.com/u/Leka_sree/" target="_blank" rel="noreferrer">
              <SiLeetcode />
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;