import React, { useState, useRef } from "react";
import InputField from "./Components/InputField/InputField";
import LoadingIndicator from "./Components/LoadingIndicator/LoadingIndicator";
import SuccessMessage from "./Components/SuccessMessage/SuccessMessage";
import networkRequests from "./services/networkRequest";

const AppFunctional = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const $fileInputField = useRef(null);

  const handleInputChange = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "phoneNumber":
        setPhoneNumber(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    let profilePic;
    if ($fileInputField.current) {
      profilePic = $fileInputField.current.files[0];
    }

    /**
     * Normal approach only works without files
     */
    // const requestBody = {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   email,
    //   profilePic //--> file hence no json
    // };

    const requestBody = new FormData();
    requestBody.append("firstName", firstName);
    requestBody.append("lastName", lastName);
    requestBody.append("phoneNumber", phoneNumber);
    requestBody.append("email", email);
    requestBody.append("profilePic", profilePic);

    setIsRequestPending(true);
    networkRequests(requestBody)
      .then(() => {
        setIsRequestPending(false);
        setIsFormSubmitted(true);
      })
      .catch(() => {
        setIsRequestPending(false);
      });
  };

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <InputField
          onChangeHandler={handleInputChange}
          label="first name"
          type="text"
          value={firstName}
          name="firstName"
        />
        <InputField
          onChangeHandler={handleInputChange}
          label="last name"
          type="text"
          value={lastName}
          name="lastName"
        />
        <InputField
          onChangeHandler={handleInputChange}
          label="Phone number"
          type="number"
          value={phoneNumber}
          name="phoneNumber"
        />
        <InputField
          onChangeHandler={handleInputChange}
          label="Email"
          type="email"
          value={email}
          name="email"
        />

        <input
          ref={$fileInputField}
          name="profile-pic"
          type="file"
          accept=".jpg,.png"
        />

        {!isRequestPending && !isFormSubmitted ? (
          <input type="submit" value="Submit" />
        ) : null}
        {isRequestPending ? <LoadingIndicator /> : null}
        {isFormSubmitted ? <SuccessMessage /> : null}
      </form>
    </div>
  );
};

export default AppFunctional;
