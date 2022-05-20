import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import thl_profile from '../../assets/thl_profile.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__conatiner">
        <h5>Hello I'm</h5>
        <h1>Tak-Ho</h1>
        <h5 className = "text-light">Software Engineer</h5>

        <CTA />
        <HeaderSocials />

        <div className="my-photo">
          <img src = {thl_profile} alt = "Picture of Tak-Ho Lee"/>
        </div>

        <a href = "contact" className = 'scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header