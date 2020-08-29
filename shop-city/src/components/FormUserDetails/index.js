import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navbar from "react-bootstrap/Navbar";
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
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
