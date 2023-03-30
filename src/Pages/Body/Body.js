import React from "react";
import "./body.css";
import Aphone from "../../images/Rectangle.png";
import Bphone from "../../images/Rectangle 1.png";
import Cphone from "../../images/Rectangle 2.png";



function Body() {
  return (
    <div className="container" style={{ marginTop: "100px"}}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="first-phone">
          <img src={Aphone} className="fphone"/>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        <div className="col-sm-12 col-md-12 col-lg-6 body-sect">
          <h5 className="aHeader">Create an account</h5>

    <h2 className="bHeader">
    Create/login to an existing<br></br> account to get started
    </h2>

    <p className="paragraph">
    An account is created with your email<br></br>
    and a desired password
    </p>
          
        </div>
      </div>

      <div className="row">
      
        <div className="col-sm-12 col-md-12 col-lg-6 body-sect2">
          <h5 className="aHeader">Explore varieties</h5>

          <h2 className="bHeader">
          Shop for your favorites<br></br>meal as e dey hot.
          </h2>

          <p className="paragraph">
          Shop for your favorite meals or drinks<br></br>
          and enjoy while doing it.
          </p>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        <div className="col-sm-12 col-md-12 col-lg-5">
          <img src={Bphone} className="aphone"/>
        </div>
      </div>

      <div className="row">
      
      <div className="col-sm-12 col-md-12 col-lg-5">
        <img src={Cphone} className="bphone"/>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-1"></div>

      <div className="col-sm-12 col-md-12 col-lg-6 body-sect3">
        <h5 className="aHeader">Checkout</h5>

        <h2 className="bHeader">
        When you done check out<br></br>and get it delivered.
        </h2>

        <p className="paragraph">
        When you done check out and get it <br></br>
        delivered with ease.
        </p>
      </div>
    </div>

    </div>
  );
}

export default Body;
