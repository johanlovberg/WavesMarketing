import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import wavesEvent from "../../pictures/waves_event_loga.jpg"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-sign">
        <img 
          src={wavesEvent}
          className="image"
        />

      </div>
      <h1 className='header'> WavesMarketing</h1>
{/*       <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
           <p><a href="#services">Våra Tjänster</a></p>
          <p><a href="#abouts">Om</a></p>
          <p><a href="#possibility">Kontakt</a></p>
          <p><a href="#blog">Library</a></p>
      </div> */}
      </div>
{/*       <div className="gpt3__navbar-sign">
        <img 
          src={wavesEvent}
          className="image"
        />
      </div> */}
{/*       <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#services">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
