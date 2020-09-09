import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Navbar from "react-bootstrap/Navbar";
import Button from "@material-ui/core/Button";

function Confirm(props) {
  const { values, nextStep, prevStep } = props;
  const forward = (e) => {
    e.preventDefault();
    // process form //
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="confirm">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Confirm</h1>
          </Navbar>
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={values.firstName}
            />
            <ListItem primaryText="Last Name" 
              secondaryText={values.lastName} />
            <ListItem
              primaryText="Email"
              secondaryText={values.email}
            />
            <ListItem
              primaryText="Password"
              secondaryText={values.password}
            />
            <ListItem primaryText="Address" secondaryText={values.address} />
            <ListItem primaryText="City" secondaryText={values.city} />
            <ListItem primaryText="Zip" secondaryText={values.zip}  />
            
          </List>
         
          <Button
            label="Confirm & Continue"
            style={styles.button}
            onClick={forward}
          >
            Confirm & Continue
          </Button>

          <Button label="Back" style={styles.back} onClick={back}>
            Back
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
      
    </div>
    
  );
}

const styles = {
  button: {
    background: "linear-gradient(45deg, #fc5296 20%, #f67062 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 45,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(250, 105, 135, .3)",
  },
  back: {
    margin: 10,
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 45,
    padding: "0 30px",
    background: "linear-gradient(45deg,  #d8dede 0%, #e5bdf6 90%)",
  },
};

export default Confirm;
