import React from 'react';
import {
  SkillBarContainer,
  SkillBarFilled,
} from './SkillBarStyle';

interface SkillBarProps {
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ percentage, color }): JSX.Element => (
  <SkillBarContainer>
    <SkillBarFilled percentage={percentage} color={color}/>
  </SkillBarContainer>
);

export default SkillBar;
