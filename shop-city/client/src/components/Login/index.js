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
        history.pushState("/");
    })
    .catch(e => alert(e.message));
  };

  return (
    <div>
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            id="email"
            name="email"
            hintText="Enter Your email"
            floatingLabelText="Email"
            onChange={event => setEmail(event.target.value)}
            // defaultValue={values.email}
          />
          <br />
          <TextField
            id="password"
            name="password"
            hintText="Enter Your password"
            floatingLabelText="Password"
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
    }
};

export default Login;
