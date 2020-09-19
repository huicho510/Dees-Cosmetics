import React  from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./style.css"
import { useHistory } from "react-router-dom";

function Success() {
 
  const history = useHistory();
    return (
        <div className="success">
      <MuiThemeProvider>
        <React.Fragment>
            <h1 className="text-dark">Success</h1>
        
          <h4>You Will Get an Email with Further instructions</h4>

          <button className= "shop-btn" onClick={e => history.push('/home')}> Start Shopping</button>
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }


export default Success;
