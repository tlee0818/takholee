import React from "react";
import "./projects.css";
import IMG1 from "../../assets/port-tetris-bot.png";
import IMG2 from "../../assets/port-audio-reactive.png";
import IMG3 from "../../assets/port-tartanhacks.png";
import IMG4 from "../../assets/port-image-analyzer.png";
import IMG5 from "../../assets/port-lda.png";
import IMG6 from "../../assets/port-oss.png";


const Projects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Tetris Bot",
      text: "A tetris bot for an in-school hackathon (Hack 112). Responsible of creating functions that identified holes, “deep holes,” bumpiness, height of blocks in a game state to evaluate which rotation/position for the given piece would be the most optimal.",
      tech: "Python3, PIL (ImageGrab), pynput",
      github: "https://github.com/tlee0818/tetrisbot",
      demo: "https://www.youtube.com/watch?v=N7wr3gSZGpY&t=2s",
    },
    {
      id: 2,
      image: IMG2,
      title: "Audio-Reactive Filter",
      text: "Built a Python program that takes a  picture and a music clip. The program returns a video of the filter applied on the image, with the music in the background; the filter on the image will change according to the beat/melody of the song.",
      tech: "Python3, pyAudio, aubio, soundfile, openCV, tkInter",
      github: "https://github.com/tlee0818/AudioReactiveFilter",
      demo: "https://youtu.be/LW93wdEvspM",
    },
    {
      id: 3,
      image: IMG3,
      title: "TartanHack Dashboard",
      text: "Contributed to CMU's largest hackathon's dashboard app using Dart and Flutter. Responsible for Events Page",
      tech: "Dart, Flutter, Swagger API",
      github: "",
      demo: "https://apps.apple.com/us/app/tartanhacks-dashboard/id1556362423",
    },
    {
      id: 4,
      image: IMG4,
      title: "Image Analyzer",
      text: "Created a data visualization framework with data/visualization plugins for image analysis. Used Clarifai's machine learning API (clustering) to analyze input image and returned color density profile of the picture",
      tech: "Typescript (Promises), Express, Handlebars, Bootstrap4",
      github: "https://github.com/tlee0818/data-visualizer",
      demo: "",
    },
    {
      id: 5,
      image: IMG5,
      title: "LDAPA Data Collection",
      text: "Collected Learning Disability resources by webscraping for useful information.Used Airtable as the data repository for the scraped information",
      tech: "Python3, BeautifulSoup4, Selenium",
      github: "https://github.com/tlee0818/lda-webscrape",
      demo: "",
    },
    {
      id: 6,
      image: IMG6,
      title: "Open Source Sustainability",
      text: "Gathered repository data of open-source projects for PyPi and Packagists ecosystems via their respective APIs, webscraping and reverse-Github-searching. Performed various regression analysis to identify life cycles of open source projects.",
      tech: "Python3, BeautifulSoup4, Selenium, Github Search API",
      github: "https://github.com/tlee0818/pypi-gh-link-matcher",
      demo: "https://symposium.foragerone.com/meeting-of-the-minds-2022/presentations/46077",
    }
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container project-container">
        {data.map(({ id, image, title, text, tech, github, demo }) => {
          return (
            <article className="project-item">
              <div className="project-item-image">
                <img src={image} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-desc">
                <p className="desc">Description: {text}</p>
                <p>Tech: {tech}</p>
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
