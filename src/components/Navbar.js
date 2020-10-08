import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollPosition } from "./hooks/useScrollPosition";
import useWindowDimensions from "./hooks/useWindowDimensions";

const NavbarComponent = (props) => {
  const [active, toggleActive] = useState(false);
  const [sticky, setSticky] = useState(true);
  const { width } = useWindowDimensions();
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (width < 768) {
        setSticky(true);
      } else {
        if (isShow !== sticky) setSticky(isShow);
      }
    },
    [sticky]
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ transform: sticky ? "translateY(0%)" : "translateY(-100%)" }}
    >
      <Navbar.Brand>
        <Link to="/">Alex Johnson</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => toggleActive(!active)} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <AnchorLink to="/#about" className="nav-link">
            <span className="numbered-nav">01.</span>
            About
          </AnchorLink>

          <AnchorLink to="/#projects" className="nav-link">
            <span className="numbered-nav">02.</span>
            Projects & Experience
          </AnchorLink>

          <AnchorLink to="/#contact" className="nav-link">
            <span className="numbered-nav">03.</span>
            Contact
          </AnchorLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
