import React from 'react'
import ABack from "../../images/Abackimg.png";
import './foot.css'

function Foot() {
  return (
    
      <div className="another-box" style={{backgroundImage:`url(${ABack})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "500px"}}>
      
      <div className='Section'>

      <h1 className="head">Download the app now.</h1>

        <p className="head-para">
        Available on your favorite store. Start your premium experience now
        </p>

        <div className="the-btn">
            <button className=" the-first-btn">Playstore</button>
            <button className=" the-second-btn">App store</button>
        </div>

      </div>
      </div>
    
    
  )
}

export default Foot
