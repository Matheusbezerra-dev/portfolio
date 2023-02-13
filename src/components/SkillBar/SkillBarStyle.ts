import styled from 'styled-components';

interface SkillBarFilledProps {
  percentage: number;
  color: string;
}

export const SkillBarContainer = styled.div`
  height: 0.6rem;
  width: 70vw;
  background-color: #e6e6e6;
  border-radius: 5px;
  position: relative;
`;

export const SkillBarFilled = styled.div<SkillBarFilledProps>`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: ${props => props.color};
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;
