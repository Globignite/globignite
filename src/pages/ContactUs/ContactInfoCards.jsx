import React from 'react';

const ContactInfoCards = () => {
  return (
    <div className="contact-area pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Contact</span>
          <h2>Get in Touch</h2>
        </div>

        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="flaticon-planet-earth"></i>
              <h3>Office Location</h3>
              <p>54 Hegmann Uninuo Apt. 890, New York, NY 10018, United States.</p>
              <a href="#" className="contact-card-btn">
                Direction
                <i className='bx bx-plus plus-btn'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="flaticon-email"></i>
              <h3>Contact</h3>
              <p>Email: info@Zinka.com</p>
              <p>Mobile: (+44) - 45789 - 5789</p>
              <a href="#" className="contact-card-btn">
                Learn More
                <i className='bx bx-plus plus-btn'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="contact-card">
              <i className="flaticon-clock"></i>
              <h3>Hours of Operation</h3>
              <p>Monday - Friday: 09:00 - 20:00</p>
              <p>Sunday & Saturday: 10:30 - 22:00</p>
              <a href="#" className="contact-card-btn">
                Support
                <i className='bx bx-plus plus-btn'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCards;
