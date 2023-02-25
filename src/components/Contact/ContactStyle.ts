import styled from "styled-components";


export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 2rem;
  text-align: center;
`;

export const Titleh2 = styled.h2`
  margin-bottom: 1.5rem;
`;

export const P = styled.p`
`;

export const ContainerForm = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  @media (max-width: 450px) {
    padding: 1rem;
    margin-top: 1.5rem;
  }
`;


