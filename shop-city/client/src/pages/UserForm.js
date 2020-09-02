import React, { Component } from "react";
import FormUserDetails from "../components/FormUserDetails/index";
import FormPersonalDetails from "../components/FormPersonalDetails/index";
import Confirm from "../components/Confirm/index";
import Success from "../components/Success/index";
import { auth } from "../config/firebase";
import { useStateValue } from "../components/StateProvider/StateProvider";

function UserForm (props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // register = (event) => {
  //   event.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((auth) => {
  //       history.pushState("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };
  // const [] = useState()
   const state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
   password:"",
    address: "",
    city: "",
    bio: "",
  };
  // Proceeds to next step
 const nextStep = () => {
     const {step}  = state;
     this.setState({
      step: {step} + 1,
    });
  };
  // Go to previos step
 const prevStep = () => {
    const { step } = state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
 const handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  const { step } = state;
  const  { firstName, lastName, email, password, address, city, zip } = state;
  const values = { firstName, lastName, email, password, address, city, zip };


  return (
<div>
{(() => {
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 4:
      return( <Success />
      )

      }
})()}
   
     </div>   
  )
}
  


export default UserForm;
