import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>PARANGELMATA</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
