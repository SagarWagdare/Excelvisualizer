import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>ExcelVisual</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink>BarChart</NavLink>
          <NavLink>PieChart</NavLink>
          <NavLink>LineChart</NavLink>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
