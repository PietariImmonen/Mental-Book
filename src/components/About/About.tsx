import React from 'react'
import './about.css'
import AboutBanner from './AboutBanner'
import AboutTeam from './AboutTeam'
import AboutText from './AboutText'

const About = () => {
  return (
    <div>
        <AboutBanner />
        <AboutText />
        <AboutTeam />
    </div>
  )
}

export default About