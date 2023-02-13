import React from 'react'
import { Link } from 'react-router-dom';
import SkillBar from '../SkillBar/skillBar';
import {
  ContainerMySkill,
  ContainerSkillBar,
} from './MySkillStyle';

const MySkill: React.FC  = (): JSX.Element => {
  return (
    <ContainerMySkill>
      <section>
        {`<h2>`}
          <h2> Skill & Experiencia</h2>
        {`</h2>`}
      </section>
      <section>
        {`<p>`}
          <p>

          </p>
          <p>
            Eu crio sites responsivos de sucesso que são rápidos, fáceis de usar e construídos com as melhores práticas. A principal área de minha especialização é desenvolvimento front-end, HTML, CSS, JS, React.
          </p>
          <p>
            Visite meu perfil no <a href='https://www.linkedin.com/in/matheusbezerra-dev/'>LinkedIn</a> para mais detalhes ou apenas entre em <Link to='/contact'>contato</Link> comigo.
          </p>
          <p>

          </p>
        {`</p>`}
      </section>
      <section>
        {'<section>'}
        <ContainerSkillBar>
          <h4>React</h4>
          <SkillBar percentage={90} color={'rgb(65, 224, 253)'} />
        </ContainerSkillBar>
        <ContainerSkillBar>
          <h4>Styled-components</h4>
          <SkillBar percentage={80} color={'rgb(60, 55, 129)'} />
        </ContainerSkillBar>
        <ContainerSkillBar>
          <h4>TypeScript</h4>
          <SkillBar percentage={75} color={'rgb(0, 122, 204)'} />
        </ContainerSkillBar>
        <ContainerSkillBar>
          <h4>JavaScript</h4>
          <SkillBar percentage={90} color={'rgb(239, 216, 29)'} />
        </ContainerSkillBar>
        <ContainerSkillBar>
          <h4>CSS</h4>
          <SkillBar percentage={95} color={'rgb(37, 75, 221)'} />
        </ContainerSkillBar>
        <ContainerSkillBar>
          <h4>HTML</h4>
          <SkillBar percentage={100} color={'rgb(221, 75, 37)'} />
        </ContainerSkillBar>
        {'</section>'}
      </section>

      
      
    </ContainerMySkill>
  )
}

export default MySkill;
