import React, {  useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Navbar from "react-bootstrap/Navbar";
import Button from "@material-ui/core/Button";
import "./index.css";
import { auth } from "../../config/firebase";


function FormUserDetails(props) {

  const { values, handleChange, nextStep } = props;
  const forward = (e) => {
    // e.preventDefault();
    nextStep();
  };
  return (
    <div className="User-detail">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Enter User Details</h1>
          </Navbar>
          <TextField
             style={styles.card}
            id="firstName"
            name="firstName"
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
           style={styles.card}
            id="lastName"
            name="lastName"
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            style={styles.card}
            id="email"
            name="email"
            hintText="Enter Your email"
            floatingLabelText="Email"
            onChange={handleChange}
            defaultValue={values.email}
          />
          <br />
          <TextField
           style={styles.card}
            id="password"
            name="password"
            hintText="Enter Your password"
            floatingLabelText="Password"
            onChange={handleChange}
            defaultValue={values.password}
          />
          <br />
          <Button
            className="button"
            label="Continue"
            style={styles.button}
             onClick={forward}
          >
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
}
const styles = {
  button: {
    background: "linear-gradient(45deg, #c797eb 20%,  #c8c2d8 99%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 45,
    padding: "0 30px",
    boxShadow: "0 3px 2px 2px #baa5e9",
  },
  card: {
    background:"white",
    padding:"15px",
    borderRadius:5,
    margin:"2px"
  
  }
};
export default FormUserDetails;
