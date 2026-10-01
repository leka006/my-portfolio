import React, { useState } from "react";
import { PROJECTS } from "./projectsData";
import "./Projects.css";

const repoName = (url) => (url ? url.replace("https://github.com/", "") : "");

function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="pj-section" id="projects">
      <div className="pj-wrap">
        <h2 className="pj-heading">Projects</h2>

        <ul className="pj-list">
          {PROJECTS.map(({ title, icon: Icon, link, desc }, i) => {
            const isOpen = open === i;
            return (
              <li key={title} className={`pj-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="pj-head"
                  aria-expanded={isOpen}
                  aria-controls={`pj-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="pj-left">
                    <span className="pj-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pj-icon">
                      <Icon />
                    </span>
                  </span>

                  <span className="pj-main">
                    <span className="pj-name">{title}</span>
                    {link && <span className="pj-sub">{repoName(link)}</span>}
                  </span>

                  <span className="pj-plus" aria-hidden="true" />
                </button>

                <div className="pj-panel" id={`pj-panel-${i}`} role="region">
                  <div className="pj-panel-clip">
                    <div className="pj-panel-body">
                      {desc && <p className="pj-desc">{desc}</p>}
                      {link && (
                        <a
                          className="pj-link"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects;