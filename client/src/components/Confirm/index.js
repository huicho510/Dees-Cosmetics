import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Navbar from "react-bootstrap/Navbar";
import Button from "@material-ui/core/Button";
import "./style.css"

function Confirm(props) {
  const { values, prevStep } = props;
  const forward = (e) => {
    e.preventDefault();
    // process form //
    props.handleFormSubmit(e)
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="confirm">
      <MuiThemeProvider>
        <React.Fragment>
        <h4 className="login-head">Dee's Cosmetics</h4>
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
    background: "linear-gradient(45deg, #c797eb 20%,  #c8c2d8 99%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 45,
    padding: "0 30px",
     boxShadow: "0 3px 2px 2px #baa5e9"
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
};

export default Confirm;
