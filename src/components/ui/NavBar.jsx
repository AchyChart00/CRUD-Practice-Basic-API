import React from "react";
import * as crud from "../../provider/crudProvider";
import { Navbar, Nav, Container } from "react-bootstrap";


export const NavBar = () => {

    const logoimg = "../public/assets/crudLogo.jpg"
    
  crud
    .createUser({
      name: "Jacob",
      job: "Software engineer",
    })
    .then((resp) => {
      console.log(resp);
    });

  crud.readUser(1).then((resp) => {
    console.log(resp);
  });

  crud
    .updateUser(1, {
      name: "rafa",
      job: "Computer Engineer",
    })
    .then((resp) => {
      console.log(resp);
    });

  crud.deleteUser(1).then((resp) => {
    console.log(resp);
  });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >
            CRUD 
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Create</Nav.Link>
              <Nav.Link href="#link">Read</Nav.Link>
              <Nav.Link href="#home">Update</Nav.Link>
              <Nav.Link href="#link">Delete</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
