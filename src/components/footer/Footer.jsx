import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer-logo'>TAKHOLEE</a> */}

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>


      <div className="footer-copyright">
        <small>&copy; Tak-Ho Lee 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer