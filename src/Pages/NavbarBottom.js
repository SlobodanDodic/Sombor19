import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Planet } from "react-planet";
import { Image } from "react-bootstrap";

import menuLogo from "../Assets/icons/menu.png";
import somborLogo from "../Assets/icons/Sombor.png";
import facebookLogo from "../Assets/icons/facebook.png";
import bookingLogo from "../Assets/icons/booking.png";
import tripIcon from "../Assets/icons/trip.png";

const NavbarTop = () => {
  return (
    <Navbar
      fixed="bottom"
      className="navbar pb-4"
      style={{
        backgroundColor: "rgb(0 0 0 / 35%)",
        borderTop: "4px double rgb(255 255 255 / 55%)",
      }}
    >
      <Container>
        <Nav.Link
          className="p-0"
          title="L-Team"
          href="https://www.autoskolalteam.rs/"
          target="_blank"
        >
          <span className="stamp">Work</span>
        </Nav.Link>

        <Nav.Link
          className="p-0"
          title="Red+"
          href="https://www.redcross.org.rs/en/"
          target="_blank"
        >
          <span className="stamp save">Save</span>
        </Nav.Link>

        <Planet
          centerContent={
            <Image
              style={{
                width: "30px",
              }}
              src={menuLogo}
            />
          }
          hideOrbit
          autoClose
          orbitRadius={145}
          bounceOnClose
          rotation={108}
          mass={3}
          bounceDirection="BOTTOM"
        >
          <Nav.Link
            title="Visit Sombor"
            href="https://www.visitsombor.org/"
            target="_blank"
          >
            <img style={{ width: "40px" }} src={somborLogo} alt="Visit_SO" />
          </Nav.Link>

          <Nav.Link
            title="Facebook"
            href="https://www.facebook.com/milosevic.dragan.3"
            target="_blank"
          >
            <img style={{ width: "40px" }} src={facebookLogo} alt="Facebook" />
          </Nav.Link>

          <Nav.Link
            title="Booking"
            href="https://www.booking.com/hotel/rs/sombor-19-central-apartment.sr.html"
            target="_blank"
          >
            <img style={{ width: "47px" }} src={bookingLogo} alt="Booking" />
          </Nav.Link>

          <Nav.Link
            title="TripAdvisor Sombor"
            href="https://www.tripadvisor.com/Attractions-g304093-Activities-Sombor_Vojvodina.html"
            target="_blank"
          >
            <img style={{ width: "40px" }} src={tripIcon} alt="Trip" />
          </Nav.Link>

          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Planet>

        <Nav.Link
          className="p-0"
          title="Visit Serbia"
          href="https://www.serbia.travel/en"
          target="_blank"
        >
          <span className="stamp travel">Travel</span>
        </Nav.Link>

        <Nav.Link className="p-0" title="Gallery" as={Link} to="/gallery">
          <span className="stamp repeat">Repeat</span>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
