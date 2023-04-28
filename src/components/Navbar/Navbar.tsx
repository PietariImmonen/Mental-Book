import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa"

interface props {
  token: string | null
  handleLogOut: (e: any) => void
}

const Navbar: React.FC<props> = ({token, handleLogOut}) => {
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

  console.log()

  return (
    <div className='nav-container'>
        <div className='nav-inside-container'>
            {!isOpen && <div className='nav-logo'>
              <a href='/'><img src='src/assets/Logo.png' className='footer-logo'/></a> 
            </div>}
            
            <div className='nav-right-container'>
              {localStorage.getItem('phonenumbers-user-token')!== null && 
                <div className='nav-item big'>
                  <a href='/write'>Write feelings</a>
                </div>}
                <div className='nav-item big'>
                  <a href='/about'>About</a>
                </div>
                {localStorage.getItem('phonenumbers-user-token')!== null ? 
                        <div className='nav-item big' onClick={handleLogOut}>
                          <a href='/login'>Log Out!</a>
                        </div> :
                        <div className='nav-items-last'>
                          <div className='nav-item big'>
                            <a href='/login'>Login!</a>
                          </div>
                          <div className='nav-item big'>
                            <a href='/signup'>Sign Up!</a>
                          </div>
                      </div>
                }
            </div>
            
            <div className='nav-icon-container'>
                {isOpen ? 
                <div className='nav-mobile'>
                    <div onClick={() => setIsOpen(false)} className='close-icon'><FaTimes size={'50px'}/></div>
                    <div className='nav-mobile-inside'>
                      {localStorage.getItem('phonenumbers-user-token')!== null && 
                        <div className='nav-item big'>
                          <a href='/write'>Write feelings</a>
                        </div>
                      }
                      <div className='nav-item big'>
                        <a href='/about'>About</a>
                      </div>
                      {localStorage.getItem('phonenumbers-user-token')!== null ? 
                        <div className='nav-item big' onClick={handleLogOut}>
                          <a href='/login'>Log Out!</a>
                        </div> :
                        <div>
                          <div className='nav-item big'>
                            <a href='/login'>Login!</a>
                          </div>
                          <div className='nav-item big'>
                            <a href='/signup'>Sign Up!</a>
                          </div>
                    </div>
                      }
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