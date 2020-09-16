import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Navbar from "react-bootstrap/Navbar";
import Button from "@material-ui/core/Button";
import "./index.css";


function FormPersonalDetails(props) {
  const { values, handleChange, nextStep, prevStep } = props;
  const forward = (e) => {
    e.preventDefault();
    nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="personal">
      <MuiThemeProvider>
        <React.Fragment>
        <h4 className="login-head">Dee's Cosmetics</h4>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Enter Personal Details</h1>
          </Navbar>
          <TextField
            id="id"
            name="address"
            hintText="Street Address"
            floatingLabelText="Street Address"
            onChange={handleChange}
            defaultValue={values.address}
            style={styles.card}
          />
          <br />
          <TextField
            id="city"
            name= "city"
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange}
            defaultValue={values.city}
            style={styles.card}
          />
          <br />
          <TextField
            id="zip"
            name="zip"
            hintText="Enter Your zip"
            floatingLabelText="Zip"
            onChange={handleChange}
            defaultValue={values.zip}
            style={styles.card}
          />
          <br />
          <Button
            label="Continue"
            style={styles.button}
            onClick={forward}
          >
            Continue
          </Button>

          <Button
            label="Back"
            style={styles.back}
            onClick={back}
          >
            Back
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
  back: {
    margin: 10,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 45,
    padding: "0 30px",
    background: "linear-gradient(45deg, #f876de 20%, #e61d8c 99%)",
  },
  card: {
    background:"white",
    padding:"15px",
    borderRadius:5,
    margin:"2px"
  
  }
};

export default FormPersonalDetails;
