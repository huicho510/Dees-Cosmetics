import React, { useState } from "react";
import FormUserDetails from "../components/FormUserDetails/index";
import FormPersonalDetails from "../components/FormPersonalDetails/index";
import Confirm from "../components/Confirm/index";
import Success from "../components/Success/index";
import API from "../utils/USER";
import { auth } from "../config/firebase";

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
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form is submiting");
    if (newUser.firstName && newUser.lastName) {
      auth
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((result) => {
          console.log(result);
          API.saveUser({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            address: newUser.address,
            city: newUser.city,
            zip: newUser.zip,
          }).then((x) => nextStep());
        })

        .catch((e) => alert(e.message));
    }
  }

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
    <div className="form-overlay">
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
                handleFormSubmit={handleFormSubmit}
                values={newUser}
              />
            );
          case 4:
            return <Success />;
        }
      })()}
    </div>
  );
}
export default UserForm;
