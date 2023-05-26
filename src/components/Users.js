import React from "react";
import { Link } from "react-router-dom";

import {
  StyledAreaHeader,
  StyledBodyUserTable,
  StyledButtonAdd,
  StyledHeader,
  StyledHeaderUserTable,
  StyledRowBody,
  StyledRowHeder,
  StyledUsersContainer,
  StyledUsersTable,
} from "./Users.css";

const Users = () => {
  return (
    <StyledUsersContainer>
      <StyledAreaHeader>
        <StyledHeader>Users</StyledHeader>
        <Link to={"/add"}>
          <StyledButtonAdd>Dodaj użytkownika</StyledButtonAdd>
        </Link>
      </StyledAreaHeader>

      <StyledUsersTable>
        <StyledHeaderUserTable>
          <tr>
            <StyledRowHeder>Nazwa</StyledRowHeder>
            <StyledRowHeder>Email</StyledRowHeder>
            <StyledRowHeder>Telefon</StyledRowHeder>
            <StyledRowHeder>Kraj</StyledRowHeder>
          </tr>
        </StyledHeaderUserTable>
        <StyledBodyUserTable>
          <tr>
            <StyledRowBody>Peter</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
          </tr>
          <tr>
            <StyledRowBody>Peter</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
            <StyledRowBody>Griffin</StyledRowBody>
          </tr>
        </StyledBodyUserTable>
      </StyledUsersTable>
    </StyledUsersContainer>
  );
};

export default Users;
