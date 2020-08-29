import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import Navbar from "react-bootstrap/Navbar";

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, address, city, zip },
    } = this.props;
    return (
        <div className="content">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Confirm</h1>
          </Navbar>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Address" secondaryText={address} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Zip" secondaryText={zip} />
          </List>

          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default Confirm;
