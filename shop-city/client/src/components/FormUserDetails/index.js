import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navbar from "react-bootstrap/Navbar";
import Button from '@material-ui/core/Button';
import "./index.css"

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="content">
        <MuiThemeProvider>
          <React.Fragment>
            <Navbar
              variant="dark"
              className="justify-content-center"
            >
              <h1 className='text-dark'>Enter User Details</h1>
            </Navbar>
            <TextField
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              hintText="Enter Your email"
              floatingLabelText="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <Button
              className="button"
              label="Continue"
             
              style={styles.button}
              onClick={this.continue}>Continue
              </Button>
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
};

export default FormUserDetails;
