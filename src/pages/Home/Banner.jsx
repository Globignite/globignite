import React from "react";
import bannerImg from "../../assets/img/home-two/home-two-img.png";
import shape1 from "../../assets/img/home-two/home-two-shape1.png";
import shape2 from "../../assets/img/home-two/home-two-shape2.png";
import shape3 from "../../assets/img/home-two/home-two-shape3.png";
import dots1 from "../../assets/img/home-two/home-two-dots.png";
import dots2 from "../../assets/img/home-two/home-two-dots2.png";

const Banner = () => {
  return (
    <div className="banner-area-two">
      <div className="container-fluid">
        <div className="container-max-2">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="banner-content-two">
                <span>Best for You</span>
                <h1>Empowering Your Vision with Innovative Solutions</h1>
                <p>
                  At Globignite, we fuel your ideas with cutting-edge technology
                  and unparalleled expertise. As a leading software development
                  agency, we are dedicated to transforming your vision into
                  reality through innovative solutions and seamless digital
                  experiences.
                </p>
                {/* <div className="banner-content-btn">
                  <a href="#" className="learn-btn">
                    Learn More
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=07d2dXHYb94"
                    className="play-on-btn popup-btn"
                  >
                    Play Video
                    <i className="flaticon-forward"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-img-2">
                <img src={bannerImg} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom-shape">
        <div
          className="shape-one wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <img src={shape1} alt="Shape 1" />
        </div>
        <div
          className="shape-two wow animate__animated animate__fadeInUp"
          data-wow-delay=".5s"
        >
          <img src={shape2} alt="Shape 2" />
        </div>
        <div
          className="shape-three wow animate__animated animate__fadeInUp"
          data-wow-delay=".7s"
        >
          <img src={shape3} alt="Shape 3" />
        </div>
        <div className="banner-dots1">
          <img src={dots1} alt="Dots 1" />
        </div>
        <div className="banner-dots2">
          <img src={dots2} alt="Dots 2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
