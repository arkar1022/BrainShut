import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextField, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SLTitle = styled.button`
  font-weight: bold;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #e5e5e5;

  @media (min-width: 0px) {
    font-size: 20px;
  }
  @media (min-width: 600px) {
    font-size: 35px;
  }
  @media (min-width: 1200px) {
    font-size: 45px;
  }

  &:hover {
    transform: scale(1.3);
    cursor: pointer ;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const SLForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ButtonText = styled.div`
  font-weight: 500;
  font-size: 64px;
`;

export const SLBox = styled.div`
  background: white;
  border: none;
  box-shadow: 0px 0px 5px 5px black;
  border-radius: 40px;
  background-color: #e5e5e5;
  padding: 30px 40px;

`;
export const SLField = styled(TextField)`
  width: auto;
  margin-top: 20px !important;
  padding: 10px !important;
  background: #efefef;
  border-radius: 30px;
`;

export const FLink = styled.a`
  text-decoration: none;
  color: black;
  align-items: right;
  justify-content: right;
  display: flex;

  &:hover {
    cursor: pointer ;
    font-weight: 600;
  }
`;

export const DesField = styled.div`
  text-decoration: none;
  color: black;
  justify-content: top;
  text-align: justify;
  padding: 6px 40px;
`;
