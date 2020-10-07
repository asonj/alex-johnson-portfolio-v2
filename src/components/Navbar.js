import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavbarComponent = (props) => {
  const [active, toggleActive] = useState(false);
  const [navBarActiveClass, toggleNavBarActiveClass] = useState("");
  const [prevScrollPos, updatePrevScrollPos] = useState(window.pageYOffset);
  const [navVisible, setNavVisible] = useState(true);
  const toggleHamburger = () => {
    toggleActive(!active);
    toggleNavBarActiveClass(!!navBarActiveClass ? toggleNavBarActiveClass("is-active") : "");
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    console.log(currentScrollPos, prevScrollPos, visible);
    updatePrevScrollPos(currentScrollPos);
    setNavVisible(visible);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={navVisible ? "navbar" : "navbar navbar-hidden"}>
      <Navbar.Brand>
        <Link to="/">Alex Johnson</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <AnchorLink to="/#about" className="numbered-nav">
              About
            </AnchorLink>
          </Nav.Link>
          <Nav.Link>
            <AnchorLink to="/#projects" className="numbered-nav">
              Projects & Experience
            </AnchorLink>
          </Nav.Link>
          <Nav.Link>
            <AnchorLink to="/#contact" className="numbered-nav">
              Contact
            </AnchorLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
