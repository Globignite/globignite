import React, { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";
import Navbar from "../../components/Navbar";
import AboutWidget from "../../components/AboutWidget";
import Counter from "../../components/Counter";
import WorkProcess from "../../components/WorkProcess";
import BrandLogo from "../../components/BrandLogo";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import ServiceArea from "./ServiceArea";
import MissionArea from "./MissionArea";
import DataTable from "./DataTable";

const Home = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <Banner />
      <ServiceArea />
      <AboutWidget />
      <Counter />
      <WorkProcess />
      <MissionArea />
      <BrandLogo />
      <DataTable />
      <Footer />
    </div>
  );
};

export default Home;
