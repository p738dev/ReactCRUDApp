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
  //const [persons, setPersons] = useState([]);

  const newPerson = (newPerson) => {
    setPersons((prev) => [...prev, newPerson]);
  };

  const savePerson = (e) => {
    e.preventDefault(e);
    newPerson({
      name: name,
      email: email,
      phone: phone,
      country: country,
    });
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="number"
          placeholder="Wprowadź numer telefonu"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Kraj"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <StyledButton type="submit">Dodaj</StyledButton>
      </StyledForm>
    </StyledAddContainer>
  );
};

export default AddUser;
