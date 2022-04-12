import styled from "styled-components";
import { Radio } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CrossIcon = styled(FontAwesomeIcon)`
  color: #4d4c4a;
  @media (min-width: 0px) {
    font-size: 30px;
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
    transform: scale(1.05);
  }
`;
export const TimerContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width: 900px) {
    padding-bottom: 10px;
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  height: 393px;
  background-color: #cdd1ce;
  border: none;
  box-shadow: 0 0 8px #999;
  overflow: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 0px) {
    min-height: 250px;
    height: auto;
    padding: 15px;
  }
  @media (min-width: 600px) {
    height: 293px;
    padding: 15px;
  }
  @media (min-width: 900px) {
    height: 393px;
    padding: 20px 10px 0px 30px;
    margin: 30px 30px 0px 30px;
  }
`;

export const QueTxt = styled.div`
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 12px;

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

export const AnsRadio = styled(Radio)`
  .MuiSvgIcon-root {
    @media (min-width: 0px) {
      font-size: 16px;
    }
    @media (min-width: 600px) {
      font-size: 20px;
    }
    @media (min-width: 900px) {
      font-size: 30px;
    }
  }
`;
export const OkBtn = styled.button`
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

  @media (min-width: 0px) {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    font-size: 25px;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const NextBtn = styled.button`
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
  padding: 9px 12px;

  @media (min-width: 0px) {
    font-size: 16px;
  }
  @media (min-width: 900px) {
    font-size: 25px;
    margin: 30px 30px 0px 30px;
  }

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const AnsTxt = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;

  @media (min-width: 0px) {
    font-size: 16px;
    margin: 6px 0px 0px 20px;
  }
  @media (min-width: 600px) {
    font-size: 20px;
    margin: 9px 0px 0px 25px;
  }
  @media (min-width: 900px) {
    font-size: 30px;
    margin: 12px 0px 0px 30px;
  }

  .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
    color: black;
  }
`;

export const MHeader = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  width: 100%;
  height: 30%;
  color: #383838;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 0px) {
    font-size: 30px;
  }

  @media (min-width: 600px) {
    font-size: 60px;
  }
  @media (min-width: 1200px) {
    font-size: 90px;
  }
`;
export const ScoreTxt = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #383838;
  text-shadow: -2px -2px 0 #858585;

  @media (min-width: 0px) {
    font-size: 150px;
  }
  @media (min-width: 600px) {
    font-size: 250px;
  }

  @media (min-width: 1200px) {
    font-size: 300px;
  }
`;

export const ScoreModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70%;
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
    height: 250px;
  }
  @media (min-width: 600px) {
    height: 350px;
  }
  @media (min-width: 900px) {
    height: 500px;
  }
`;
