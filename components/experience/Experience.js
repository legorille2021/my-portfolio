import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      
      <div class="container container__experience">
        
        <div class="experience__frontend">
          <h3>Frontend Development</h3>
          <div class="experience__content">
            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>HTML</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon" /> 
              <div>
              <h4>CSS</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>Javascript</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>Boostrap</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>  
              <div>
              <h4>Sass</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>  
              <div>
              <h4>React</h4> 
              </div>
            </article>
          </div>
        </div>
        
        
      
      </div>
    
    </section>
  )
}

export default Experience
