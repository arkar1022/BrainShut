import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const ScoreContainer = styled(Accordion)` margin-bottom:5px;`;
export const Season = styled(AccordionSummary)``;
export const Score = styled(AccordionDetails)``;

export const UserInfoContainer = styled.div``;

export const PicEditIcon = styled(FontAwesomeIcon)`
  height: 20px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const ScoreTxt = styled.text`
  font-family: "Josefin Sans", sans-serif;
  margin-left: 8px;
  @media (min-width: 0px) {
    font-size: 13px;
  }

  @media (min-width: 300px) {
    font-size: 15px;
  }

  @media (min-width: 900px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const ScrollBox = styled.div`
  overflow: auto;
  height: 400px;
`;
export const ModalBtn = styled.button`
  border: 0.5px solid black;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  background-color: white;
  color: black;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;

  @media (min-width: 0px) {
    font-size: 18px;
  }
  @media (min-width: 600px) {
    font-size: 20px;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const CrossIcon = styled(FontAwesomeIcon)`
  position: fixed;
  top: 5px;
  right: 8px;
  height: 16px;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

export const UserPic = styled.img`
  margin: 10px 0px;
  border-radius: 50%;
  border: 5px groove black;
  @media (min-width: 0px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 900px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 160px;
    height: 160px;
  } ;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TxtField = styled(TextField)`
  width: 300px;
  margin-bottom: 20px !important;
  padding: 10px !important;
  background: #efefef;
  border-radius: 30px;
`;

export const TxtBox = styled.text`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  margin: 13px 0px;

  @media (min-width: 0px) {
    font-size: 13px;
  }

  @media (min-width: 300px) {
    font-size: 16px;
  }

  @media (min-width: 900px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 25px;
  }
`;
