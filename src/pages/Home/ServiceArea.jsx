import React from "react";
import serviceIcon7 from "../../assets/img/service/service-icon7.png";
import serviceIcon8 from "../../assets/img/service/service-icon8.png";
import serviceIcon9 from "../../assets/img/service/service-icon9.png";
import shape9 from "../../assets/img/shape/shape9.png";
import shape10 from "../../assets/img/shape/shape10.png";
import shape11 from "../../assets/img/shape/shape11.png";
import shape7 from "../../assets/img/shape/shape7.png";
import shape12 from "../../assets/img/shape/shape12.png";

const services = [
  {
    title: "Web Development",
    link: "service-details.html",
    iconClass: "bi-code-slash",
    iconBg: "service-icon-bg1",
    description:
      "Build responsive and dynamic websites that provide an excellent user experience. We use the latest technologies to ensure your website is fast, secure, and visually appealing.",
  },
  {
    title: "App Development",
    link: "service-details.html",
    iconClass: "bi-phone",
    iconBg: "service-icon-bg2",
    description:
      "Create seamless, user-friendly mobile applications for iOS and Android platforms. Our apps are designed to enhance user engagement and drive business growth.",
  },
  {
    title: "Custom Software Development",
    link: "service-details.html",
    iconClass: "bi-gear",
    iconBg: "service-icon-bg3",
    description:
      "Provide tailored software solutions that cater to the specific needs of your clients. This service includes developing applications for various platforms.",
  },
  {
    title: "E-commerce Solutions",
    link: "service-details.html",
    iconClass: "bi-cart",
    iconBg: "service-icon-bg4",
    description:
      "Offer comprehensive e-commerce services that include developing custom online stores, integrating secure payment gateways, and crafting interactive shopping experiences that drive sales and improve customer satisfaction.",
  },
  {
    title: "Content Management Systems (CMS)",
    link: "service-details.html",
    iconClass: "bi-file-earmark-text",
    iconBg: "service-icon-bg5",
    description:
      "Develop custom CMS platforms or customize existing ones like WordPress, Drupal, and Joomla to help clients manage their digital content effectively. Services focus on making content updates easy and ensuring scalability.",
  },
  {
    title: "Maintenance and Support",
    link: "service-details.html",
    iconClass: "bi-wrench",
    iconBg: "service-icon-bg",
    description:
      "Offer ongoing maintenance and support services to ensure software systems are always up-to-date and running smoothly. This includes regular system updates, troubleshooting, user support, and performance monitoring.",
  },
];

const ServiceArea = () => {
  return (
    <div className="service-area-two">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Services</span>
          <h2>Our Implementation Mission is to Serve You Best</h2>
        </div>
        <div className="row pt-45">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-another-card">
                <a href={service.link}>
                  <i
                    className={`service-icon ${service.iconClass} ${service.iconBg}`}
                  ></i>
                </a>
                <h3>
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-two-shape">
        <div className="shape-in1">
          <img src={shape9} alt="Shape 9" />
        </div>
        <div className="shape-in2">
          <img src={shape10} alt="Shape 10" />
        </div>
        <div className="shape-in3">
          <img src={shape11} alt="Shape 11" />
        </div>
        <div className="shape-in4">
          <img src={shape7} alt="Shape 7" />
        </div>
        <div className="shape-in5">
          <img src={shape12} alt="Shape 12" />
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
