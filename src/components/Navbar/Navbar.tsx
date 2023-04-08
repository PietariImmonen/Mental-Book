import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      if(windowWidth>599) {
        setIsOpen(false)
      }
    };
  });

  return (
    <div className='nav-container'>
        <div className='nav-inside-container'>
            {!isOpen && <div className='nav-logo'>
              <a href='/'><img src='src/assets/Logo.png' className='footer-logo'/></a> 
            </div>}
            <div className='nav-right-container'>
                <div className='nav-item big'>
                  <a href='/write'>Write feelings</a>
                </div>
                <div className='nav-item big'>
                  <a href='/about'>About</a>
                </div>
                <div className='nav-item big'>
                  <a href='/login'>Login!</a>
                </div>
            </div>
            
            <div className='nav-icon-container'>
                {isOpen ? 
                <div className='nav-mobile'>
                    <div onClick={() => setIsOpen(false)} className='close-icon'><FaTimes size={'50px'}/></div>
                    <div className='nav-mobile-inside'>
                      <div className='nav-item big'>
                        <a href='/write'>Write feelings</a>
                      </div>
                      <div className='nav-item big'>
                        <a href='/about'>About</a>
                      </div>
                      <div className='nav-item big'>
                        <a href='/login'>Login!</a>
                      </div>
                      <div className='nav-item big'>
                        <a href='/signup'>Sign Up!</a>
                      </div>
                    </div>
                </div>
                :
                <div onClick={() => setIsOpen(true)} className='open-icon'><FaBars size={'50px'}/></div>}
            </div>
        </div>
    </div>
  )
}

export default Navbar