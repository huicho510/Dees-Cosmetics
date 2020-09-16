import React, { useState } from "react";
import "./style.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";
import { auth } from "../../config/firebase";
import {useHistory} from "react-router-dom"

function Login() {
  const history = useHistory(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push("/");
    })
    .catch(e => alert(e.message));
  };

  return (
    <div className='content'>
      <MuiThemeProvider>
        <React.Fragment>
        <h4 className="login-head">Dee's Cosmetics</h4>
          <div className="login">   
          <TextField
            id="email"
            name="email"
            hintText="Enter Your email"
            floatingLabelText="Email"
            style={styles.card}
            onChange={event => setEmail(event.target.value)}
            // defaultValue={values.email}
          />
          <br />
          <TextField
            id="password"
            name="password"
            hintText="Enter Your password"
            floatingLabelText="Password"
            style={styles.card}
            onChange={event => setPassword(event.target.value)}
            // defaultValue={values.password}
          />
          <br />
          <Button
            className="button"
            label="Continue"
            style={styles.button}
            onClick={login}
          >
            Log in
          </Button>
          </div>
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
    boxShadow: "0 3px 2px 2px #baa5e9",
  },
  card: {
    background:"white",
    padding:"15px",
    borderRadius:5,
    margin:"2px"
  
  }
};

export default Login;
