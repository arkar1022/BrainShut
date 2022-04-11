import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactRoundedImage from "react-rounded-image";

export const ProfilePic = styled(ReactRoundedImage)`
  display: inline;
`;

export const InfoTxt = styled.text`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
`;

export const SeasonTxt = styled.text`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
`;
export const AccBtn = styled.button`
    border: 2px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    color: black;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    padding: 3px 20px ;
    font-size: 15px ;
  

     &:hover{
        background-color: black ;
        color: white ;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.40);
        cursor: pointer ;
    }
`
export const ScoreTxt = styled.text`
  font-family: "Josefin Sans", sans-serif;
  font-size: 13px;

`;

export const UserModal = styled.div`
  top: 65px;
  right: 25px;
  border: none;
  position: absolute ;
  box-shadow: 0px 0px 3px 3px #a1a1a1;
  border-radius: 2px;
  background-color: #cccccc;
  padding: 30px 40px;
  width: 270px;
`;

export const UserButton = styled.button`
  border-radius: 50%;
  text-decoration: none;
  color: black;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  padding: 9px;
  position: absolute;
  right: 25px;
  top: 10px;

  @media (min-width: 0px) {
    font-size: 10px;
    border: 1px solid black;
  }
  @media (min-width: 600px) {
    font-size: 25px;
    border: 3px solid black;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer ;
  }
`;

export const UserIcon = styled(FontAwesomeIcon)``;

export const DesField = styled.div`
  text-decoration: none;
  color: black;
  justify-content: top;
  text-align: justify;
  padding: 6px 40px;
`;
