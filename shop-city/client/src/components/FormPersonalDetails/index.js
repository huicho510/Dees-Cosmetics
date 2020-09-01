import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Navbar from "react-bootstrap/Navbar";
import Button from '@material-ui/core/Button';
import "./index.css"

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="content">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Enter Personal Details</h1>
          </Navbar>
          <TextField
            hintText="Street Address"
            floatingLabelText="Street Address"
            onChange={handleChange("address")}
            defaultValue={values.address}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your zip"
            floatingLabelText="Zip"
            onChange={handleChange("zip")}
            defaultValue={values.zip}
          />
          <br />
          <Button
            label="Continue"
            secondary={true}
            style={styles.button}
            onClick={this.continue}>Continue</Button>
        
          <Button
            label="Back"
            primary={false}
            style={styles.back}
            onClick={this.back}>Back</Button>
          
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    background: 'linear-gradient(45deg, #fc5296 20%, #f67062 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 45,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(250, 105, 135, .3)',
  },
  back: {
    margin: 10,
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 45,   
    padding: '0 30px',
    background: 'linear-gradient(45deg,  #d8dede 0%, #e5bdf6 90%)'
  }
};

export default FormPersonalDetails;
