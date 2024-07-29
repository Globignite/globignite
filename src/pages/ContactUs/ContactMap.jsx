import React from 'react';


const ContactMap = () => {
  return (
    <div className="contact-map">
      <div className="container-fluid m-0 p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3734131639715!2d-96.95588917878352!3d18.89830951964275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e51eb45eacad%3A0x465ac54aa2735573!2zUmluY29uIGRlbCBCb3NxdWUsIOCmleCmsOCnjeCmoeCni-CmrOCmviwg4Kat4KeH4Kaw4Ka-4KaV4KeN4Kaw4KeB4KacLCDgpq7gp4fgppXgp43gprjgpr_gppXgp4s!5e0!3m2!1sbn!2sbd!4v1594641366896!5m2!1sbn!2sbd"
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
}

export default ContactMap;
