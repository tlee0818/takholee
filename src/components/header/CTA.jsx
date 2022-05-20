import React from 'react'
import thl_resume from "../../assets/thl_resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href = {thl_resume} download className = 'btn'>Resume</a>
        <a href = "#contact" className = 'btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA