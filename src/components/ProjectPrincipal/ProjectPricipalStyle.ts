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
  margin-top: 5rem;
`;
