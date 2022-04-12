import styled from "styled-components";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TableContainer = styled.div`
  width: 100%;
  height: 393px;
  background-color: #cdd1ce;
  border: none;
  box-shadow: 0 0 8px #999;
  overflow: auto;
  margin-top: 30px;
  padding: 5px 9px;

  font-family: "Josefin Sans", sans-serif;

  @media (min-width: 0px) {
    font-size: 12px;
    height: 243px;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    height: 293px;
  }
  @media (min-width: 900px) {
    font-size: 25px;
    height: 393px;
  }
`;

export const UserScoreContainer = styled(Grid)`
  width: 100%;
  border: 0.5px solid black;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white ;
  margin-top: 30px;

  font-family: "Josefin Sans", sans-serif;

  @media (min-width: 0px) {
    font-size: 12px;
    height: 40px;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    height: 50px;
  }
  @media (min-width: 900px) {
    font-size: 25px;
    height: 70px;
  }
`;

export const Row = styled(Grid)`
  border: 0.5px solid black;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  background-color: white ;
  height: 70px;
  border-radius: 20px;
  @media (min-width: 0px) {
    height: 40px;
  }
  @media (min-width: 600px) {
    height: 50px;
  }
  @media (min-width: 900px) {
    height: 70px;
  }
`;

export const BulletIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  margin-left: 10px;
  @media (min-width: 0px) {
    height: 8px;
  }
  @media (min-width: 600px) {
    height: 10px;
  }
  @media (min-width: 900px) {
    height: 13px;
  }
`;

export const SeasonTxt = styled.text`
  font-family: "Josefin Sans", sans-serif;

  @media (min-width: 0px) {
    font-size: 18px;
  }
  @media (min-width: 600px) {
    font-size: 25px;
  }
  @media (min-width: 900px) {
    font-size: 35px;
  }
`;
