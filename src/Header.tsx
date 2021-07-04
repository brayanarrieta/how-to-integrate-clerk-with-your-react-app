import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Clerk Example</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <UserButton />
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
