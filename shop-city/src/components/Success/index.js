import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "react-bootstrap/Navbar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // process form //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <div className="content">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Success</h1>
          </Navbar>
          <p>You Will Get an Email with Further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
