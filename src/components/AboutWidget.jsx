import React from "react";
import aboutImg4 from "../assets/img/about/about-img4.png";

const AboutWidget = () => {
  return (
    <div className="about-widget-area pt-50 pb-70">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-widget-img">
              <img src={aboutImg4} alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-widget-content">
              <div className="section-title">
                <span className="sp-before sp-after">About Us</span>
                <h2>Grow Your Business With Our Agency</h2>
              </div>
              <h3>
                Empowering Businesses with 3 Years of Innovation and Excellence
              </h3>
              <p>
                At Globignite, we are dedicated to driving technological
                innovation and delivering outstanding software solutions that
                meet the unique needs of your business. Our commitment to
                excellence ensures that we consistently evolve and adapt to the
                latest industry trends and technologies.
              </p>
              <div className="about-widget-list">
                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <span>01</span>
                    <p>
                      High standards of professionalism and integrity. We
                      establish close working relationships with our clients to
                      ensure mutual success.
                    </p>
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <span>02</span>
                    <p>
                      Innovative thinking both inside and outside the box. Our
                      creative approach ensures we deliver unique and effective
                      solutions.
                    </p>
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <span>03</span>
                    <p>
                      Commitment to giving our best in every project. We value
                      continuous learning and embrace multicultural competence
                      to serve a global clientele.
                    </p>
                  </li>
                </ul>
              </div>
              {/* <div className="about-video">
                <a
                  href="https://www.youtube.com/watch?v=07d2dXHYb94&t=6s"
                  className="video-btn popup-btn"
                >
                  <i className="flaticon-forward"></i>
                  <span>Play Video</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWidget;
