import React, { useEffect, useState } from 'react'
import './navbar.css'

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
            {!isOpen && <div className='nav-logo'> LOGO</div>}
            <div className='nav-right-container'>
                <div className='nav-item big'>Write feelings</div>
                <div className='nav-item big'>About</div>
                <div className='nav-item small'>Login!</div>
                <div className='nav-item small'>Sign Up!</div>
            </div>
            
            <div className='nav-icon-container'>
                {isOpen ? 
                <div className='nav-mobile'>
                    <div onClick={() => setIsOpen(false)} className='close-icon'>X</div>
                    <div className='nav-mobile-inside'>
                        <div className='nav-item big'>Write feelings</div>
                        <div className='nav-item big'>About</div>
                        <div className='nav-item small'>Login!</div>
                        <div className='nav-item small'>Sign Up!</div>
                    </div>
                </div>
                :
                <div onClick={() => setIsOpen(true)} className='open-icon'>---</div>}
            </div>
        </div>
    </div>
  )
}

export default Navbar