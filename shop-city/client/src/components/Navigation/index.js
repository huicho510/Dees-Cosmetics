import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Drawer from "./Drawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider"
import { auth } from "../../config/firebase";


function Navigation() {
  const [{ cart, user }] = useStateValue();
  console.log(user, cart);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className='menu'>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Drawer />
        <Link to="./home" className="brand">Boutique</Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            
          <Link to="//instagram.com/_deecosmetics" className="nav-links" target="_blank"><InstagramIcon /></Link>
            
          <Link to="./home" className="nav-links">Home</Link>
          <Link to="#features" className="nav-links">Shop</Link>
          <Link to="#pricing" className="nav-links">Pricing</Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Nav>
        </Navbar.Collapse>
        <Nav>
        <Link to={!user && "/login"} className="nav-links">
        <div onClick={login}>
           <span >{user ? 'Log in' : 'Log Out'} </span>
           </div>
           </Link>
          <Link to="/sign" className="nav-links"> 
           <span >Sign Up </span>
           </Link>
           
           <Link to="/checkout" className="nav-links">
          <ShoppingCartIcon fontSize="large" /> <span>{cart.length}</span>
          </Link>
        </Nav>
      </Navbar>
    
    </nav>
  );
}

export default Navigation;
