import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            CRUD
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/create"
              >
                Create
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/read"
              >
                Read
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/update"
              >
                Update
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/delete"
              >
                Delete
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
