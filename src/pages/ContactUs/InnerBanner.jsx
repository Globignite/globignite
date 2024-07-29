import React from "react";
import bannerShape1 from "../../assets/img/inner-banner/banner-shape1.png";
import bannerShape2 from "../../assets/img/inner-banner/banner-shape2.png";
import bannerShape3 from "../../assets/img/inner-banner/banner-shape3.png";
import dotsShape from "../../assets/img/shape/dots-shape.png";

const InnerBanner = ({ title, breadcrumb }) => {
  return (
    <div className="inner-banner">
      <div className="container">
        <div className="inner-title text-center">
          <h3>{title}</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>{breadcrumb}</li>
          </ul>
        </div>
      </div>

      <div className="inner-banner-shape">
        <div className="shape-one">
          <img src={bannerShape1} alt="Banner Shape 1" />
        </div>
        <div className="shape-two">
          <img src={bannerShape2} alt="Banner Shape 2" />
        </div>
        <div className="shape-three">
          <img src={bannerShape3} alt="Banner Shape 3" />
        </div>
        <div className="inner-banner-dots">
          <img src={dotsShape} alt="Dots Shape" />
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
