import styled from "styled-components";

export const ContainerMySkill = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
  
`;

export const ContainerSkill = styled.section`
  display: grid;  
`;

export const ContainerSkillBar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.3rem;
`;

export const ConatinerTechSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 500px) {
    padding: 0.5rem
  }
`;