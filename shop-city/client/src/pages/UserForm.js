import React, { useState, setState, Component } from "react";
import FormUserDetails from "../components/FormUserDetails/index";
import FormPersonalDetails from "../components/FormPersonalDetails/index";
import Confirm from "../components/Confirm/index";
import Success from "../components/Success/index";
import { auth } from "../config/firebase";
import { useStateValue } from "../components/StateProvider/StateProvider";


function UserForm() {
  const [step, setStep] = useState(1);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zip: "",
  })
  // Proceeds to next step
  const nextStep = () => {
    setStep(step + 1);
  };
  // Go to previos step
  const prevStep = () => {
    setStep(step - 1);
  };
  // Handle fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  return (
    <div>
      {(() => {
        switch (step) {
          case 1:
            return (
              <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                values={newUser}
              />
            );
          case 2:
            return (
              <FormPersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={newUser}
              />
            );
          case 3:
            return (
              <Confirm
                nextStep={nextStep}
                prevStep={prevStep}
                values={newUser}
              />
            );
          case 4:
            return (<Success />
            )
        }
      })()}
    </div>
  )
}
export default UserForm;


