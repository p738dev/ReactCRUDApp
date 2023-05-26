import styled from "styled-components";

export const StyledAddContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const StyledHeaderInformation = styled.h4`
  font-size: 25px;
  padding-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

export const StyledInput = styled.input`
  width: 60%;
  height: 40px;
  padding-left: 10px;
  font-size: 16px;

  &:hover {
    transform: scale(0.97);
    background-color: darkblue;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
`;
