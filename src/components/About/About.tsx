import React from 'react';
import Cicle from '../Cicle/Cicle';

const techList: string[] = ['React', 'Redux', 'Context API', 'Hooks', 'Styled-Components', 'Git & Github', 'RTL', 'Jest', 'ES5/ES6', 'TypeScript', 'CSS3', 'HTML5', 'Node.js', 'Material UI', 'API Rest', 'C', 'MySQL'];

const About: React.FC = (): JSX.Element => {
  return (
    <main>
      {'<h2>'}
      <h2>Um pouco sobre min...</h2>
      {'</h2>'}

      {'<p>'}
      <p>
        Sou um Desenvolvedor Front-End localizado no Brasil. Tenho uma grande paixão por efeitos de interface do usuário.
      </p>
      <p>

      </p>
      <p>

      </p>
      {'</p>'}
      <Cicle />
    </main>
  )
}

export default About;
