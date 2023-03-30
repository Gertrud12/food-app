import React from 'react'
import './subhead.css'
import Phone from "../../images/Group 53.png"
import Line from "../../images/HR.png"


function Subhead() {
  return (
    <div>
      <div className="phone text-center">
          <img src={Phone}/>
          </div>

          <div className="image text-center">
        <img src={Line} />
      </div>

      <h2 className='para-head text-center'>
        How the app works</h2>
    </div>
  )
}

export default Subhead
