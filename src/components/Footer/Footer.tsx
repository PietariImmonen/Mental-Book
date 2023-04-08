import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-container-inside'>
            <div className='footer-first-container'>
                <div className='footer-logo'>
                    <img src='src/assets/Logo.png' className='footer-logo'/>
                </div>
                <div className='footer-social-logos'>
                    <div className='social-logo'>
                        <FaInstagram size={'50px'}/>
                    </div>
                    <div className='social-logo'>
                        <FaFacebook size={'50px'}/>
                    </div>
                    <div className='social-logo'>
                        <FaTwitter size={'50px'}/>
                    </div>
                </div>
            </div>
            <div className='footer-second-container'>
                <h2 className='footer-h2'>Navigation</h2>
                <div className='footer-link'>Write feelings</div>
                <div className='footer-link'>About</div>
                <div className='footer-link'>Login!</div>
                <div className='footer-link'>Sign Up!</div>
            </div>
        </div>
    </div>
  )
}

export default Footer