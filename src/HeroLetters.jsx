import React from 'react';
import {
  FaLungs,
  FaMicrophoneAlt,
  FaFileAlt,
  FaRobot,
  FaCode,
  FaHeartbeat,
  FaCloudSun,
  FaEye,
  FaTooth,
} from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import './HeroLetters.css';

const PROJECTS = [
  {
    title: 'Pneumonia Detection',
    icon: FaLungs,
    link: 'https://github.com/leka006/pnemonia'
  },
  {
    title: 'Speech-to-Text',
    icon: FaMicrophoneAlt,
    link: 'https://github.com/leka006/sppech2text'
  },
  {
    title: 'PaperInsight',
    icon: FaFileAlt,
    link: 'https://github.com/leka006/paperinsight'
  },
  {
    title: 'RAG Chatbot',
    icon: FaRobot,
    link: 'https://github.com/leka006/RAG_chatbot'
  },
  {
    title: 'CodeBase',
    icon: FaCode,
    link: 'https://github.com/leka006/codebase'
  },
  {
    title: 'Cardio',
    icon: FaHeartbeat,
    link: 'https://github.com/leka006/cardio'
  },
  {
    title: 'My Portfolio',
    icon: SiReact,
    link: 'https://github.com/leka006/my-portfolio'
  },
  {
    title: 'Climora',
    icon: FaCloudSun,
    link: 'https://github.com/leka006/CLIMORA'
  },
  {
    title: 'Visyre',
    icon: FaEye,
    link: 'https://github.com/leka006/visyre'
  },
  {
    title: 'Periodontal Detection',
    icon: FaTooth,
    link: 'https://github.com/leka006/Periodontal-Disease-Prediction'
  },
];

const RING_TEXT = 'PORTFOLIO • ME • PORTFOLIO • ME • PORTFOLIO • ME • ';

const Letters = ({ word }) =>
  word.split('').map((ch, i) => (
    <span key={i} className="pf-l" style={{ '--i': i }}>
      {ch}
    </span>
  ));

const HeroLetters = ({
  name = 'LEKASREE',
  role = 'ML & Fullstack Developer',
  projects = PROJECTS,
}) => {
  return (
    <section className="pf-hero" id="home">
      <span className="pf-plus pf-p2">+</span>
     

      <div className="pf-welcome">
        Welcome
        <br />
        to my
      </div>

      <div className="pf-bar" />

      <h1 className="pf-title" aria-label="Portfolio">
        <div className="pf-layer pf-outline" aria-hidden="true">
          <Letters word="PORTFOLIO" />
        </div>
        <div className="pf-layer pf-solid" aria-hidden="true">
          <Letters word="PORTFOLIO" />
        </div>
      </h1>

      <div className="pf-meta">
        <span>{name}</span>
        <span>{role}</span>
      </div>

      <div className="pf-ring" style={{ '--n': projects.length }}>
        <svg className="pf-ring-text" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="pfRingPath" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
          </defs>
          <text>
            <textPath href="#pfRingPath">{RING_TEXT}</textPath>
          </text>
        </svg>

        {projects.map((p, i) => {
          const Tag = p.link ? 'a' : 'div';
          const Icon = p.icon;
          return (
            <div className="pf-slot" key={p.title} style={{ '--i': i }}>
              <Tag
                className={`pf-card pf-c-${i % 4}`}
                {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
              >
                <div className="pf-top">
                  <div className="pf-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="pf-arrow">↗</div>
                </div>
                <div className="pf-icon">{Icon && <Icon />}</div>
                <div className="pf-name">{p.title}</div>
              </Tag>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroLetters;