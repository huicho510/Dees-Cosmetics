import React  from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "react-bootstrap/Navbar";
import "./style.css"

function Success() {
 
    return (
        <div className="success">
      <MuiThemeProvider>
        <React.Fragment>
            <h1 className="text-dark">Success</h1>
        
          <h4>You Will Get an Email with Further instructions</h4>
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }


export default Success;
