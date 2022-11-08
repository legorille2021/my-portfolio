import React from 'react'
import './haeder.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HaederSocials from './HaederSocials'

const Haeder = () => {
  return (
    <haeder id="home">
      <div className="container haeder__container">
        <h5>Hello, I'm</h5>
        <h1>Camilla Lonzi</h1>
        <h5 className="text-light">Frontend Developer Junior - React</h5>
        <CTA />
        <HaederSocials />

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="contact"  className="scroll__down">Scroll Down</a>
      </div>
    </haeder>
  )
}

export default Haeder
