import React from "react";
import './head.css'
import Back from "../../images/Backimg.png";
// import Line from "../../images/HR.png";

function Head() {
  return (
    <div className="box1" style={{backgroundImage:`url(${Back})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "700px", width: "100%"}}>
      <div className="top-it text-center">
        <h6 className="head1 mt-5">Food app</h6>

        <h1 className="head-para1 mt-5">
          Why stay hungry when <br></br> you can order form Bella Onojie
        </h1>

        <h6 className="aHead-para1 mt-5">Download the bella onoje's food app now on</h6>
      </div>

        <div className="bbtn">
        <button className="first-btn1 mr-3">Playstore</button>
        <button className="firstOther-btn">App store</button>
        </div>
        

        
    

      
    </div>

    
  );
}

export default Head;
