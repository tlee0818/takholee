import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const Projects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "My Project",
      text: "Lorem Ipsum",
      github: "github.com",
      demo: "youtube.com",
    },
    {
      id: 2,
      image: IMG1,
      title: "My Project",
      text: "Lorem Ipsum",
      github: "github.com",
      demo: "youtube.com",
    },
    {
      id: 3,
      image: IMG1,
      title: "My Project",
      text: "Lorem Ipsum",
      github: "github.com",
      demo: "youtube.com",
    },
    {
      id: 4,
      image: IMG1,
      title: "My Project",
      text: "Lorem Ipsum",
      github: "github.com",
      demo: "youtube.com",
    },
  ];
  return (
    <section id="projects">
      <h2>Other Projects</h2>

      <div className="container project-container">
        {data.map(({ id, image, title, text, github, demo }) => {
          return (
            <article className="project-item">
              <div className="project-item-image">
                <img src={image} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-desc">
                <p>Description: {text}</p>
                <p>Skills: Javascript</p>
              </div>
              <div className="project-item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
