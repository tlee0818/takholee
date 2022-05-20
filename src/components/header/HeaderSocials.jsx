import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/takholee' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/tlee0818' target="_blank"><BsGithub/></a>
        <a href='https://www.youtube.com/channel/UCQTSMCK_ivSxVmK8sNy96CA' target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials