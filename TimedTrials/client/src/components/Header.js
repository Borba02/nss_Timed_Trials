import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleOff = () => setIsOpen(false);
  const handleLogout = () => {
    logout();
    history.push("/");
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand onClick={toggleOff} tag={RRNavLink} to="/">
          TimedTrials
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse background-color="secondary" navbar isOpen={isOpen}>
          {isLoggedIn && (
            <Nav>
              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={toggleOff}
                  tag={RRNavLink}
                  to="/"
                >
                  Your Trials
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={toggleOff}
                  tag={RRNavLink}
                  to="/trial"
                >
                  Available Trials
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={toggleOff}
                  tag={RRNavLink}
                  to="/website"
                >
                  Websites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={handleLogout}
                  tag={RRNavLink}
                  to="/"
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          )}
          {!isLoggedIn && (
            <Nav>
              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={toggleOff}
                  tag={RRNavLink}
                  to="/login"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ textDecoration: "underline" }}
                  onClick={toggleOff}
                  tag={RRNavLink}
                  to="/register"
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
