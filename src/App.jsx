import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs/ContactUs";

// Importing CSS and SCSS files
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/boxicons.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/theme-dark.css";
import "./assets/css/MyNav.css";

// Importing font CSS
import "./assets/fonts/flaticon.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
