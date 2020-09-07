import React, {  useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Navbar from "react-bootstrap/Navbar";
import Button from "@material-ui/core/Button";
import "./index.css";
import { auth } from "../../config/firebase";
import { useHistory } from "react-router-dom";

function FormUserDetails(props) {

 const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(forward)
      // .then((auth) => {
      //   history.push("/");
      // })
      .catch((e) => alert(e.message))
      
  };
  console.log(email)

  const { values, handleChange, nextStep } = props;
  const forward = (e) => {
    // e.preventDefault();
    nextStep();
  };
  return (
    <div className="User-detail">
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar variant="dark" className="justify-content-center">
            <h1 className="text-dark">Enter User Details</h1>
          </Navbar>
          <TextField
            id="firstName"
            name="firstName"
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            id="lastName"
            name="lastName"
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            id="email"
            name="email"
            hintText="Enter Your email"
            floatingLabelText="Email"
            onChange={(event) => setEmail(event.target.value)}
            defaultValue={values.email}
          />
          <br />
          <TextField
            id="password"
            name="password"
            hintText="Enter Your password"
            floatingLabelText="Password"
            onChange={(event) => setPassword(event.target.value)}
            defaultValue={values.password}
          />
          <br />
          <Button
            className="button"
            label="Continue"
            style={styles.button}
            onClick={register}
            // onClick={forward}
          >
            Continue
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
    boxShadow: "0 3px 2px 2px #baa5e9",
  },
};
export default FormUserDetails;
