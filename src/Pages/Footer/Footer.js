import React from "react";
import './footer.css'
import Logo from "../../images/Bella logo.png";
import Twitte from "../../images/Vector.png";
import Facebook from "../../images/Vector1.png";
import Insta from "../../images/instagram.png";

function Footer() {
  return (
    <div className="Footer mt-3 mb-5">
      <footer class="row">
        <div className="logo">
        <img src={Logo} />
        </div>
        
          <div className="Aimg-sect">
          <img className="img-sect" src={Twitte} />
        <img src={Facebook} />
        <img src={Insta} />
          </div>
        
        <div class="Asite-nav">
            <p>Copywright 2020 Bella Onojie.com</p>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
