import React from 'react'
import { Link } from 'react-router-dom';
import SkillBar from '../../components/SkillBar/skillBar';
import techList from '../../service/techList';
import TechList from '../TechList/TechList';
import {
  ContainerMySkill,
  ContainerSkillBar,
  ConatinerTechSkill
} from './MySkillStyle';

const MySkill: React.FC = (): JSX.Element => {
  return (
    <ContainerMySkill>
      <div>
        <h2>Skill</h2>
      </div>      
      <ConatinerTechSkill>
        {techList.map((tech) => <TechList key={tech.tech} techList={{ tech: tech.tech, image: tech.image }} />)}; 
      </ConatinerTechSkill>
    </ContainerMySkill>
  );
};

export default MySkill;
