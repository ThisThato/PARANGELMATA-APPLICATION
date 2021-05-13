import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>PARANGELMATA</Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
