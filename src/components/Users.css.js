import styled from "styled-components";

export const StyledUsersContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
`;

export const StyledAreaHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButtonAdd = styled.button`
  padding: 20px 30px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;

  &:hover {
    transform: scale(0.8);
    transition: transform 1s;
  }
`;

export const StyledHeader = styled.h1`
  padding: 10px 0;
  font-size: 28px;
`;

export const StyledUsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledHeaderUserTable = styled.thead`
  background-color: darkblue;
  color: white;
`;

export const StyledRowHeder = styled.th`
  height: 50px;
  font-size: 18px;
  border: 3px solid white;
`;

export const StyledBodyUserTable = styled.tbody`
  background-color: azure;
  color: black;
`;

export const StyledRowBody = styled.td`
  height: 50px;
  text-align: center;
  font-size: 16px;
`;
