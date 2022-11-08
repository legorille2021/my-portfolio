import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" alt="icon" onClick={()=> setActiveNav('#home') }  className={activeNav ==='#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" alt="icon" onClick={()=> setActiveNav('#about') } className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" alt="icon"  onClick={()=> setActiveNav('#experience') } className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#contact" alt="icon"  onClick={()=> setActiveNav('#contact') } className={activeNav ==='#contact' ? 'active' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav
