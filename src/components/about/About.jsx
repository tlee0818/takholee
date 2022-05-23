import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className='about-me'>
          <div className="about-me-image">
            <img src = {ME}/>
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years of Work</small>
            </article>

            <article className='about-card'>
              <FiAward className='about-icon'/>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>

          </div>

          <p>
            Lorem ipsum
          </p>

          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About