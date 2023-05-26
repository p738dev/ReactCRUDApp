import React from "react";

import {
  StyledAddContainer,
  StyledButton,
  StyledForm,
  StyledHeaderInformation,
  StyledInput,
} from "./AddUser.css";

const AddUser = () => {
  return (
    <StyledAddContainer>
      <StyledHeaderInformation>Dodaj użytkownika</StyledHeaderInformation>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Wprowadź imię"
        />
        <StyledInput
          type="text"
          placeholder="Wprowadź email"
        />
        <StyledInput
          type="number"
          placeholder="Wprowadź numer telefonu"
        />
        <StyledInput
          type="text"
          placeholder="Kraj"
        />
        <StyledButton>Dodaj</StyledButton>
      </StyledForm>
    </StyledAddContainer>
  );
};

export default AddUser;
