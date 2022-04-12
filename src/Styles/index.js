import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const RLink = styled(Link)`
text-decoration: none ;
`;

export const Answer = styled.div`
  margin-top: 20px;
  font-size: 50px;
  font-weight: bold;
`;
export const ArrowIcon = styled(FontAwesomeIcon)`
  margin: 0px 9px;
  font-size: 55px;
  color: #4d4c4a;
  @media (min-width: 0px) {
    font-size: 30px; ;
  }
  @media (min-width: 600px) {
    font-size: 55px;
  }
  @media (min-width: 900px) {
    font-size: 70px;
  }
  @media (min-width: 1200px) {
    font-size: 80px;
  }

  &:hover {
    cursor: pointer;
    color: black;
    transform: scale(1.05) ;
  }
`;
export const Title = styled.div`
  font-family: "Iceberg";

  @media (min-width: 0px) {
    font-size: 55px;
  }
  @media (min-width: 600px) {
    font-size: 100px;
  }
  @media (min-width: 900px) {
    font-size: 140px;
  }
  @media (min-width: 1200px) {
    font-size: 170px;
  }
`;

export const STitle = styled.div`
  font-family: "Rubik Mono One";
  display: inline;

  @media (min-width: 0px) {
    font-size: 20px;
  }
  @media (min-width: 600px) {
    font-size: 30px;
  }
  @media (min-width: 900px) {
    font-size: 50px;
  }
`;

export const InfoIcon = styled(FontAwesomeIcon)`
  position: fixed;
  height: 30px;
  bottom: 10px;
  right: 10px;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
export const Button = styled.button`
  border: 5px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  color: black;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  padding: 9px 12px;

  @media (min-width: 0px) {
    font-size: 20px;
    border: 3px solid black;
  }
  @media (min-width: 600px) {
    font-size: 25px;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const VerticalL = styled.div`
  border-left: 6px solid black;
  height: 400px;
  @media (max-width: 900px) {
    height: 0;
    border-left: none;
  }
`;
export const BulletIcon = styled(FontAwesomeIcon)`
margin-right: 5px;
margin-left: 10px;`;