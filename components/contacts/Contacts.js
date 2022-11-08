import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiSkype} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8j7vtz', 'template_i66kspi', form.current, 'gvON8vFmE913aRrn6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  function mailSent() {
    return ("Email inviata!");
  }
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>lonzicamilla@gmail.com</h5>
            <a href="mailto:lonzicamilla@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
            
          <article className="contact__option">
            <SiSkype  className="contact__option-icon"/>
            <h4>Skype</h4>
            <h5>camilla.lonzi3</h5>
            

          </article>
          {/*end of contact options */}
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contacts