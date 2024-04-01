import styled from "styled-components";
import { colors } from "../Constants/colors";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.mainContainer};
    width: auto;
    border-radius: 10px;
    padding: 20px;
`;

export const ErrorText = styled.p`
    font-size: 14px;
    color: ${colors.red};
    text-align: start;
    margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${colors.mainColor};
  border: none;
  color: ${colors.white};
  padding: 7px;
  text-align: center;
  border-radius: 7px;
  font-size: 14px;
  width: 300px;
  &:hover {
    background-color: ${colors.mainColorLight};
  }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const RowContainer = styled.div`
    display: flex;
    gap: 15px;
`

export {}
