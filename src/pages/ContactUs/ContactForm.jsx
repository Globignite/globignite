import React from "react";
import contactImg from "../../assets/img/contact-img.png";

const ContactForm = () => {
  return (
    <div className="contact-section pt-100 pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-img">
              <img src={contactImg} alt="Contact" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-form">
                <div className="section-title">
                  <span className="sp-before sp-after">Contact</span>
                  <h2>Contact With Us</h2>
                </div>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <i className="bx bx-user"></i>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Your Name*"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <i className="bx bx-user"></i>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="E-mail*"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <i className="bx bx-phone"></i>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Your Phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <i className="bx bx-file"></i>
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          placeholder="Your Subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <i className="bx bx-envelope"></i>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="8"
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        className="default-btn border-radius"
                      >
                        Send Message
                        <i className="bx bx-plus"></i>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
