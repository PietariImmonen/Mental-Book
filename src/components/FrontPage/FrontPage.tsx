import React from 'react'
import FrontBanner from './FrontBanner'
import FrontBoxes from './FrontBoxes'
import FrontMiddle from './FrontMiddle'
import "./frontPage.css"

const FrontPage = () => {
  return (
    <div className='front-container'>
        <FrontBanner />
        <FrontMiddle />
        <FrontBoxes />
    </div>
  )
}

export default FrontPage