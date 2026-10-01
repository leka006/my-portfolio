import React from "react";
import { SiReact, SiFigma } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import "./About.css";

const FOCUS = [
  {
    icon: SiReact,
    title: "Web experiences",
    text: "Smooth, interactive interfaces in React, turning ideas into intuitive, functional web apps.",
  },
  {
    icon: FaBrain,
    title: "AI & Machine Learning",
    text: "Real-time disease detection and imaging projects in the medical and dental field, built with Python, OpenCV and scikit-learn.",
  },
  {
    icon: SiFigma,
    title: "Design & learning",
    text: "Learning Figma, exploring new tech, and getting a little better every day.",
  },
];

const About = () => {
  return (
    <section className="ab-section" id="about">
      <div className="ab-wrap">
        <div className="ab-left">
          <div className="ab-bar" />
          <h2 className="ab-heading">
            I'm
            <br />
            Leka!
          </h2>
          <p className="ab-intro">
            I love building beautiful, functional websites that tell a story and
            give people a smooth experience.
          </p>
        </div>

        <div className="ab-right">
          <ul className="ab-list">
            {FOCUS.map(({ icon: Icon, title, text }) => (
              <li className="ab-row" key={title}>
                <div className="ab-icon">
                  <Icon />
                </div>
                <div className="ab-copy">
                  <h3 className="ab-title">{title}</h3>
                  <p className="ab-text">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="ab-now">
            Right now, I'm growing as a Fullstack developer and building things
            that feel good to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;