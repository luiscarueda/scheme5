import './navbar.css'
import React from 'react'
import logo from '../../logo.svg';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NAVLINKS } from '../../constants/data';

const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <ul className="gpt3__navbar-links_container">
        {NAVLINKS.map((item)=>(
                <li key={item.label}>
                <a href={item.href}>{item.label}</a>
                </li>
              ))}
        </ul>             
      </div>
      
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>     
</>
  )
}

export default Navbar