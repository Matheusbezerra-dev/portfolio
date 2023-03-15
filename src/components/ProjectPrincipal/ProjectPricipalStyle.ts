import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerProjectPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const ContainerSlider = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem 0.1rem;
`;

export const LinkRepositorie = styled(Link)`
   display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  border: 1px solid #4c007d;
  text-decoration: none;
  font-weight: bold;
  color: #4c007d;
  width: 11rem;
  height: 2.5rem;
  border-radius: 1rem;
  :hover {
    color: #fff;
    transition: 800ms;
    background-color: #4c007d;
  };
`;
