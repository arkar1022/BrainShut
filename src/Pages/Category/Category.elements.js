import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CategoryBtn = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;
  width: auto;
  height: 230px;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;
  padding: 9px 12px;
  vertical-align: middle;
  position: relative;

  @media (min-width: 0px) {
    width: 250px;
  }
  @media (min-width: 600px) {
    width: 220px;
  }

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transform: scale(1.05);
    color: white;
    border: none;
  }
`;

export const CatIcon = styled(FontAwesomeIcon)`
  display: block;
  position: absolute;
  align-self: center;
  height: 60px;
`;

export const CatText = styled.div`
  position: absolute;
  align-items: center;
`;

export const CatContainer = styled.div`
  width: 800px;
`;
