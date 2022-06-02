import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { GiSouthKorea } from "react-icons/gi";
import { FiAward } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} />
          </div>
        </div>

        <div className="about-content">
          {/* <div className="about-cards">
            <article className="about-card">
              <GiSouthKorea className="about-icon" />
              <h5>South Korea</h5>
              <small>Straight from Seoul</small>{" "}
            </article>

            <article className="about-card">
              {" "}
              <FiAward className="about-icon" />
              <h5>Carnegie Mellon</h5>
              <small>Info Systems</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div> */}
          <p><h3>Hello!</h3>
          I'm Tak-Ho, pronounced just like the Mexican food taco.
          <br/><br/>
          Though I first enrolled as a business major, it was after taking an introductory Computer Science course that I quickly fell in love with the field.
          <br/><br/>
          My Coursework have taught me that software engineering is much more than a familiarity with certain languages and libraries. It is the ability to understand user needs and fluently read documentations that scale better over time.
          <br/><br/>
          In my spare time, I love working out and making <a href="https://www.youtube.com/channel/UCQTSMCK_ivSxVmK8sNy96CA" target="_blank">videos</a>.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
