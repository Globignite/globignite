import React, { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";
import Navbar from "../../components/Navbar";
import AboutWidget from "../../components/AboutWidget";
import Counter from "../../components/Counter";
import WorkProcess from "../../components/WorkProcess";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";
import BrandLogo from "../../components/BrandLogo";
import SearchOverlay from "../../components/SearchOverlay";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import ServiceArea from "./ServiceArea";
import ServiceAnother from "./ServiceAnother";
import MissionArea from "./MissionArea";
import BlogArea from "./BlogArea";
import DataTable from "./DataTable";

const Home = () => {
  
  return (
    <div>
      {/* <Preloader /> */}
     
      <Navbar />
      <SearchOverlay />
      <Banner />
      <ServiceArea />
      <AboutWidget />
      <Counter />
      <ServiceAnother />
      <WorkProcess />
      <MissionArea />
      <Team />
      <Testimonial />
      <BlogArea />
      <BrandLogo />
      <DataTable />
      <Footer />
    </div>
  );
};

export default Home;
