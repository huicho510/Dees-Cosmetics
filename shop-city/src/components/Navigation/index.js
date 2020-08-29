import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Drawer from "./Drawer";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Drawer />
        <Navbar.Brand href="./home">Shop City</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="./home">Home</Nav.Link>
          <Nav.Link href="#features">Shop</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="/sign">Sign Up</Nav.Link>
          <ShoppingCartIcon fontSize='large' color="secondary"/>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
