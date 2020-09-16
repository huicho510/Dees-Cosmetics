import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Drawer from "./Drawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../config/firebase";
// import SearchFunction from "../Search";

function Navigation() {
  const [{ cart, user }] = useStateValue();
  // const [SearchTerms, setSearchTerms] = useState("")
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  // const updateSearchTerms = (newSearchTerm) => {
  //   setSearchTerms(newSearchTerm)
  // }

  return (
    <nav className="menu">
      <Navbar className="nav" expand="lg">
        <Drawer />
        <Link to="./home" className="brand">
          Dee's Cosmetics
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="//instagram.com/_deecosmetics"
              className="nav-links"
              target="_blank"
            >
              <InstagramIcon />
            </Link>

            <Link to="./home" className="nav-links">
              Home
            </Link>
            <Link to="/shop" className="nav-links">
              Shop
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>


      {/* <SearchFunction 
      refreshFunction={updateSearchTerms}
      
      /> */}
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light" className="search-button">
                Search
              </Button>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to={!user && "/login"} className="nav-links">
              <div onClick={login}>
                <span className="name"> Hello {user && user.email} </span>
                <span>{user ? "Log Out" : "Log in"} </span>
              </div>
            </Link>
            <Link to="/sign" className="nav-links">
              <span>{user ? " " : "Sign Up"} </span>
            </Link>
            <Link to='/orders' className="nav-links">
              <span>Orders</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Link to="/checkout" className="nav-links">
            <ShoppingCartIcon fontSize="large" /> <span>{cart.length}</span>
          </Link>
        </Nav>
      </Navbar>
    </nav>
  );
}

export default Navigation;
