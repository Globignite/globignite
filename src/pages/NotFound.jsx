import React, { useEffect } from "react";
import Preloader from "../components/Preloader";
import ErrorPage from "../components/ErrorPage";

const NotFound = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/src/assets/js/jquery.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/src/assets/js/bootstrap.bundle.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "/src/assets/js/wow.min.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src = "/src/assets/js/owl.carousel.min.js";
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement("script");
    script5.src = "/src/assets/js/jquery.magnific-popup.min.js";
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement("script");
    script6.src = "/src/assets/js/meanmenu.js";
    script6.async = true;
    document.body.appendChild(script6);

    const script7 = document.createElement("script");
    script7.src = "/src/assets/js/jquery.ajaxchimp.min.js";
    script7.async = true;
    document.body.appendChild(script7);

    const script8 = document.createElement("script");
    script8.src = "/src/assets/js/form-validator.min.js";
    script8.async = true;
    document.body.appendChild(script8);

    const script9 = document.createElement("script");
    script9.src = "/src/assets/js/contact-form-script.js";
    script9.async = true;
    document.body.appendChild(script9);

    const script10 = document.createElement("script");
    script10.src = "/src/assets/js/custom.js";
    script10.async = true;
    document.body.appendChild(script10);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
      document.body.removeChild(script9);
      document.body.removeChild(script10);
    };
  }, []);

  return (
    <div>
      {/* <Preloader /> */}
      <ErrorPage />
    </div>
  );
};

export default NotFound;
