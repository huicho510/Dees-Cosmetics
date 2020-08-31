import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Drawer from "./Drawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InstagramIcon from '@material-ui/icons/Instagram';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navigation() {
  return (
    <div className='menu'>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Drawer />
        <Navbar.Brand href="./home">Shop City</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            
          <Nav.Link href="//instagram.com/_deecosmetics" target="_blank"><InstagramIcon /></Nav.Link>
            
          <Nav.Link href="./home">Home</Nav.Link>
          <Nav.Link href="#features">Shop</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="/sign">Sign Up</Nav.Link>
          <ShoppingCartIcon fontSize="large"  /> Cart
        </Nav>
        
      </Navbar>
    </div>
  );
}

export default Navigation;
