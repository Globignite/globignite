import React from "react";
import workImg from "../assets/img/work-img.png";

const WorkProcess = () => {
  return (
    <div className="work-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Working Process</span>
          <h2 className="h2-color2">Simple & Clean Work Process</h2>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4">
            <div className="work-item-list">
              <ul>
                <li className="text-right">
                  <h3>
                    Understand the Requirements <span>1</span>
                  </h3>
                  <p>
                    We begin by thoroughly understanding your business needs and
                    objectives to ensure a clear and focused project direction.
                  </p>
                </li>
                <li className="text-right">
                  <h3>
                    Research & Planning <span>2</span>
                  </h3>
                  <p>
                    Our team conducts in-depth research and plans strategically
                    to lay a strong foundation for the project.
                  </p>
                </li>
                <li className="text-right">
                  <h3>
                    Design & Prototyping <span>3</span>
                  </h3>
                  <p>
                    We create detailed designs and prototypes to visualize the
                    end product and ensure alignment with your vision.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="work-img-2">
              <img src={workImg} alt="Work Process" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="work-item-list-2">
              <ul>
                <li>
                  <h3>
                    <span>4</span>Development
                  </h3>
                  <p>
                    Our skilled developers build robust and scalable solutions
                    using the latest technologies and best practices.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>5</span>Testing & Quality Assurance
                  </h3>
                  <p>
                    We rigorously test the product to ensure it meets the
                    highest standards of quality and performance.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>6</span>Deployment & Support
                  </h3>
                  <p>
                    We deploy the final product and provide ongoing support to
                    ensure seamless integration and optimal performance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
