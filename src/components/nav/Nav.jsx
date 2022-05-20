import React from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineDesktop, AiOutlineAudit, AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href = "#" onClick = {() => setActiveNav('#')} className = {activeNav === "#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href = "#about" onClick = {() => setActiveNav('#about')} className = {activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href = "#experience" onClick = {() => setActiveNav('#experience')} className = {activeNav === "#experience" ? 'active' : ''}><AiOutlineDesktop /></a>
      <a href = "#projects" onClick = {() => setActiveNav('#projects')} className = {activeNav === "#projects" ? 'active' : ''}><AiOutlineAudit /></a>
      <a href = "#contacts" onClick = {() => setActiveNav('#contacts')} className = {activeNav === "#contacts" ? 'active' : ''}><AiOutlinePhone /></a>

    </nav>
  )
}

export default Nav