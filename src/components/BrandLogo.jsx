import React from "react";
import brandLogo1 from '../assets/img/brand/brand-logo1.png';
import brandStyle1 from '../assets/img/brand/brand-style1.png';
import brandLogo2 from '../assets/img/brand/brand-logo2.png';
import brandStyle2 from '../assets/img/brand/brand-style2.png';
import brandLogo3 from '../assets/img/brand/brand-logo3.png';
import brandStyle3 from '../assets/img/brand/brand-style3.png';
import brandLogo4 from '../assets/img/brand/brand-logo4.png';
import brandStyle4 from '../assets/img/brand/brand-style4.png';
import brandLogo5 from '../assets/img/brand/brand-logo5.png';
import brandStyle5 from '../assets/img/brand/brand-style5.png';
import brandLogo6 from '../assets/img/brand/brand-logo6.png';
import brandStyle6 from '../assets/img/brand/brand-style6.png';

const BrandLogo = () => {
  return (
    <div className="brand-logo-area pt-100">
      <div className="container-fluid">
        <div className="container-max">
          <div className="brand-logo-slider owl-carousel owl-theme">
            <div className="brand-logo-item">
              <img src={brandLogo1} className="brand-logo1" alt="Brand Logo 1" />
              <img src={brandStyle1} className="brand-logo2" alt="Brand Style 1" />
            </div>
            <div className="brand-logo-item">
              <img src={brandLogo2} className="brand-logo1" alt="Brand Logo 2" />
              <img src={brandStyle2} className="brand-logo2" alt="Brand Style 2" />
            </div>
            <div className="brand-logo-item">
              <img src={brandLogo3} className="brand-logo1" alt="Brand Logo 3" />
              <img src={brandStyle3} className="brand-logo2" alt="Brand Style 3" />
            </div>
            <div className="brand-logo-item">
              <img src={brandLogo4} className="brand-logo1" alt="Brand Logo 4" />
              <img src={brandStyle4} className="brand-logo2" alt="Brand Style 4" />
            </div>
            <div className="brand-logo-item">
              <img src={brandLogo5} className="brand-logo1" alt="Brand Logo 5" />
              <img src={brandStyle5} className="brand-logo2" alt="Brand Style 5" />
            </div>
            <div className="brand-logo-item">
              <img src={brandLogo6} className="brand-logo1" alt="Brand Logo 6" />
              <img src={brandStyle6} className="brand-logo2" alt="Brand Style 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
