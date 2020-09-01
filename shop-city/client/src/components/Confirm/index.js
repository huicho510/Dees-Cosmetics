import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Navbar from "react-bootstrap/Navbar";
import Button from '@material-ui/core/Button';

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

          <Button
            label="Confirm & Continue"
            secondary={true}
            style={styles.button}
            onClick={this.continue}>Confirm & Continue</Button>
          
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

export default Confirm;
