import React from "react";
import Footer from "../templates/footer-component";
import NavbarComponent from "../components/Navbar";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./all.sass";
// import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <div className="layoutWrapper">
      <NavbarComponent />
      <div className="side-element">
        <div className="link-wrapper">
          <a href="mailto:alexjohnson@sitefulstudios.com" target="_blank" rel="noreferrer">
            alex@sitefulstudios.com
          </a>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
