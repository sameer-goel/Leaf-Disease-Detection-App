import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Github} from 'react-bootstrap-icons'

import React from "react";

function Header() {
  return (
    <div>
      <Navbar
        className="navbar navbar-dark bg-primary"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        sticky="top"
      >
        <Navbar.Brand href="/">Leaf Disease Detection App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/LabelsIdentification" >
              Project
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link
              href="https://docs.amplify.aws/lib/predictions/intro/q/platform/js"
              target="_blank"
            >
              Docs
            </Nav.Link>
            <Nav.Link
              href="https://github.com/aws-samples"
              target="_blank"
            >
              <Github/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
