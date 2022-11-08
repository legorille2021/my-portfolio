import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#camilla" className="footer__logo">Camilla Lonzi</a>
        <ul className="permalinks">
          <li><a href="#home">HOME</a></li>
          <li><a href="#home">ABOUT</a></li>
          <li><a href="#home">EXPERIENCE</a></li>
          <li><a href="#home">CONTACTS</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://linkedIn.com"><BsLinkedin /></a>
          <a href="https://github.com"><FaGithub /></a>
          <a href="https://gmail.com"><SiGmail /></a>
        </div>
      
    </footer>
  )
}

export default Footer
