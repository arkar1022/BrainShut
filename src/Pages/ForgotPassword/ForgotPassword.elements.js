import styled from "styled-components";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CheckIcon = styled(FontAwesomeIcon)`
margin-bottom: 20% ;
color: green ;
  @media (min-width: 0px) {
    font-size: 100px;
  }
  
  @media (min-width: 600px) {
    font-size: 150px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
 
  height: 80%;
  transform: translate(-50%, -50%);
  background: #fafafa;
  padding: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 0px) {
    height: 300px;
    width: 70% ;
  }
  @media (min-width: 600px) {
    height: 350px;
    width: 500px ;
  }
  @media (min-width: 900px) {
    height: 500px;
    width: 500px ;
  }
`;
export const MHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

`;

export const Title = styled.div`
  font-family: "Iceberg";
  margin-left: 10px ;

  @media (min-width: 0px) {
    font-size: 60px;
  }
  @media (min-width: 900px) {
    font-size: 80px;
  }
`;

export const InfoTxt = styled.div`
   font-family: "Open Sans", sans-serif;
  margin-left: 10px ;
  margin-top: 10%;
  text-align-last: center ;

  @media (min-width: 0px) {
    font-size: 10px;
  }
  
  @media (min-width: 600px) {
    font-size: 13px;
  }
`;

export const EmailField = styled(TextField)`
  width: 250px;
  margin-top: 30px !important;
  padding: 10px  !important;
  background: #efefef;
  border-radius: 30px;
`;

export const ETxt = styled.div`
  font-family: "Open Sans", sans-serif;

  @media (min-width: 0px) {
    font-size: 20px;
  }
  
  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const ContBtn = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 0px;
  text-decoration: none;
  color: black;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  padding: 9px 20px;
  margin-top: 20px ;

  @media (min-width: 0px) {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;