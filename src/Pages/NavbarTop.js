import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import homeLogo from "../Assets/icons/home.png";
import galleryLogo from "../Assets/icons/gallery.png";

const NavbarTop = () => {
  return (
    <Navbar
      sticky="top"
      className="navbar navbar-dark px-2 py-0"
      style={{
        borderBottom: "4px double rgb(255 255 255 / 55%)",
        backgroundColor: "rgb(0 0 0 / 35%)",
      }}
    >
      <Container>
        <Nav.Link title="Home" as={Link} to="/">
          <img style={{ width: "27px" }} src={homeLogo} alt="Home" />
        </Nav.Link>

        <Nav.Link title="Info" as={Link} to="/info">
          <h6 className="m-0 h4">Info</h6>
        </Nav.Link>

        <Nav.Link title="Gallery" as={Link} to="/gallery">
          <img style={{ width: "25px" }} src={galleryLogo} alt="Gallery" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
