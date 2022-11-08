import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiClassicalKnowledge} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me__image">
        <img src={ME} alt="about me"></img>
      </div>
      </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">  
              <GiClassicalKnowledge className="about__icon"/>
              <h5>Studies :</h5>
              <small>Frontend Development</small>
            </article>
            
            <article className="about__card">  
              <VscFolderLibrary className="about__icon"/>
              <h5>Interests :</h5>
              <small>Music and Nature!</small>
            </article>
          
          </div>
          
          <p>
            Dopo studi di tipo umanistico, sono approdata
            al mondo della programmazione con curiosità e
            formazione costante e con un approccio alla "Goethe":
            "Qualunque cosa tu possa fare o sognare di fare, incominciala! 
            L’audacia ha in sé genio, potere e magia"
          </p>
        
        </div>
      </div>
    </section>
  )
}

export default About