import React, { Component } from "react";
import FormUserDetails from '../components/FormUserDetails/index'
import FormPersonalDetails from '../components/FormPersonalDetails/index'
import Confirm from '../components/Confirm/index'
import Success from '../components/Success/index'
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    bio: "",
  };
  // Proceeds to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Go to previos step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, address, city, zip } = this.state;
    const values = { firstName, lastName, email, address, city, zip };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
            <FormPersonalDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        );
      case 3:
        return  (
            <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
        );
      case 4:
        return <Success />
    }
  }
}

export default UserForm;
