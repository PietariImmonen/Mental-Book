import React from 'react'
import './about.css'
import TeamMember from './TeamMember'

const AboutTeam = () => {
  return (
    <div className='about-team'>
        <h1 className='about-team-h1'>Team!</h1>
        <div className='about-team-inside'>
            <TeamMember />
        </div>
    </div>
  )
}

export default AboutTeam