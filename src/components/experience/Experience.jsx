import React from 'react'
import "./experience.css"
import Timeline from './Timeline'

const Experience = () => {
  return (
    <section id = "experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <Timeline />
      </div>

      <div className="container skills-container">

      </div>
    </section>
  )
}

export default Experience