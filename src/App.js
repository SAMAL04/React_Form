import React, { Component } from "react";
import "./styles.css";
import InputField from "./Components/InputField/InputField";
import LoadingIndicator from "./Components/LoadingIndicator/LoadingIndicator";
import SuccessMessage from "./Components/SuccessMessage/SuccessMessage";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    isRequestPending: false,
    isFormSubmitted: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.setState(
      {
        isRequestPending: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            isRequestPending: false,
            isFormSubmitted: true
          });
        }, 3000);
      }
    );
  };

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      isRequestPending,
      isFormSubmitted
    } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.formSubmitHandler}>
          <InputField
            onChangeHandler={this.handleInputChange}
            label="first name"
            type="text"
            value={firstName}
            name="firstName"
          />
          <InputField
            onChangeHandler={this.handleInputChange}
            label="last name"
            type="text"
            value={lastName}
            name="lastName"
          />
          <InputField
            onChangeHandler={this.handleInputChange}
            label="Phone number"
            type="number"
            value={phoneNumber}
            name="phoneNumber"
          />
          <InputField
            onChangeHandler={this.handleInputChange}
            label="Email"
            type="email"
            value={email}
            name="email"
          />
          {!isRequestPending && !isFormSubmitted ? (
            <input type="submit" value="Submit" />
          ) : null}
          {isRequestPending ? <LoadingIndicator /> : null}
          {isFormSubmitted ? <SuccessMessage /> : null}
        </form>
      </div>
    );
  }
}

export default App;
