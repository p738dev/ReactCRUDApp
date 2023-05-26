import React, { useState } from "react";

import {
  StyledAddContainer,
  StyledButton,
  StyledForm,
  StyledHeaderInformation,
  StyledInput,
} from "./AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const savePerson = (e) => {
    e.preventDefault();
  };

  return (
    <StyledAddContainer>
      <StyledHeaderInformation>Dodaj użytkownika</StyledHeaderInformation>
      <StyledForm onSubmit={savePerson}>
        <StyledInput
          type="text"
          placeholder="Wprowadź imię"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Wprowadź email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="number"
          placeholder="Wprowadź numer telefonu"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Kraj"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <StyledButton type="submit">Dodaj</StyledButton>
      </StyledForm>
    </StyledAddContainer>
  );
};

export default AddUser;
