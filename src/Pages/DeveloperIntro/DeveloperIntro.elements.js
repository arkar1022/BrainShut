import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DevPic = styled.img`
  margin: 10px 0px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  @media (min-width: 0px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 900px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
  } ;
`;

export const Icon = styled(FontAwesomeIcon)`
margin: 0px 5px;
opacity: 0.5;

&:hover {
    opacity: 1;
    cursor: pointer ;
  }
`;



export const DevName = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  margin: 10px 0px;
  @media (min-width: 0px) {
    font-size: 23px;
  }
  @media (min-width: 900px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 35px;
  } ;
`;

export const DevInfo = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 200;
  margin: 10px 0px;
  text-align: justify;
  text-align-last: center;
  text-justify: inter-character;

  @media (min-width: 0px) {
    padding: 0px 10px;
    font-size: 14px;
  }
  @media (min-width: 500px) {
    padding: 0px 50px;
    font-size: 14px;
  }
  @media (min-width: 900px) {
    padding: 0px 200px;
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    padding: 0px 300px;
    font-size: 18px;
  }
`;

export const Item = styled.div`
  padding: 10px 20px;
  display: flex;
`;

export const SlideContainer = styled.div`
  width: 100%;
`;
