import React from 'react';
import * as ReactStrap from 'react-bootstrap';


function Nav2 () {
    return (
        <ReactStrap.Navbar bg="light" expand="lg">
  <ReactStrap.Navbar.Brand href="#home">React-Bootstrap</ReactStrap.Navbar.Brand>
  <ReactStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactStrap.Nav className="mr-auto">
      <ReactStrap.Nav.Link href="#home">Home</ReactStrap.Nav.Link>
      <ReactStrap.Nav.Link href="#link">Link</ReactStrap.Nav.Link>
      <ReactStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <ReactStrap.NavDropdown.Item href="#action/3.1">Action</ReactStrap.NavDropdown.Item>
        <ReactStrap.NavDropdown.Item href="#action/3.2">Another action</ReactStrap.NavDropdown.Item>
        <ReactStrap.NavDropdown.Item href="#action/3.3">Something</ReactStrap.NavDropdown.Item>
        <ReactStrap.NavDropdown.Divider />
        <ReactStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactStrap.NavDropdown.Item>
      </ReactStrap.NavDropdown>
    </ReactStrap.Nav>
    <ReactStrap.Form inline>
      <ReactStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactStrap.Button variant="outline-success">Search</ReactStrap.Button>
    </ReactStrap.Form>
  </ReactStrap.Navbar.Collapse>
</ReactStrap.Navbar>
    )
}

export default Nav2;