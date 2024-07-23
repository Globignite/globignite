import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";
import InnerBanner from "./InnerBanner";
import ContactInfoCards from "./ContactInfoCards";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <InnerBanner title="Contact Us" breadcrumb="Contact Us" />
      <ContactInfoCards />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  );
};

export default ContactUs;
