import React, { useEffect } from "react";
import Preloader from "../../components/Preloader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchOverlay from "../../components/SearchOverlay";
import InnerBanner from "./InnerBanner";
import AboutWidget from "../../components/AboutWidget";
import Counter from "../../components/Counter";
import ServiceList from "../../components/ServiceList";
import WorkProcess from "../../components/WorkProcess";
import History from "./History";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";
import BrandLogo from "../../components/BrandLogo";

const About = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <SearchOverlay />
      <InnerBanner />
      <AboutWidget />
      <Counter />
      <ServiceList />
      <WorkProcess />
      <History />
      <Team />
      <Testimonial />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default About;
