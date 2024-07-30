import React, { useEffect } from "react";
import Preloader from "../../components/Preloader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InnerBanner from "./InnerBanner";
import AboutWidget from "../../components/AboutWidget";
import Counter from "../../components/Counter";
import ServiceList from "../../components/ServiceList";
import WorkProcess from "../../components/WorkProcess";
import History from "./History";
import BrandLogo from "../../components/BrandLogo";

const About = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <InnerBanner />
      <AboutWidget />
      <Counter />
      <ServiceList />
      <WorkProcess />
      {/* <History />  */}
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default About;
