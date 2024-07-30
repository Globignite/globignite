import React from "react";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <div className="container-fluid m-0 p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.684332800003!2d77.62522308447431!3d12.910257643550695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1722350550312!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
