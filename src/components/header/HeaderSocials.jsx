import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vivek-gotecha-4360391ba/" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>
        <a href="https://github.com/vrgotecha" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="https://dribbble.com/vivekrg" target="_blank" rel="noreferrer"> <FiDribbble /> </a>
        {/* <a href="https://linkedin.com" target="_blank"></a> */}
    </div>
  )
}

export default HeaderSocials
