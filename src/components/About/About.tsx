import {
  ContainerAbout,
  ContainerP,
  TitleAbout,
} from './AboutStyle';

const techList: string[] = ['React', 'Redux', 'Context API', 'Hooks', 'Styled-Components', 'Git & Github', 'RTL', 'Jest', 'ES5/ES6', 'TypeScript', 'CSS3', 'HTML5', 'Node.js', 'Material UI', 'API Rest', 'C', 'MySQL'];

const About: React.FC = (): JSX.Element => {
  return (
    <ContainerAbout>      
      <TitleAbout>Um pouco sobre min...</TitleAbout>      
      <ContainerP>
        <p>
          Meu nome é Matheus Bezerra, sou Desenvolvedor web Front-end, Tecnico em panificação e atualmente faço graduação em engenharia de software. Estou finalizando a formação Full stack na trybe e iniciei em 2023 a Faculdade de Engenharia de solftware pela Ampli.
        </p>
        <p>
          O mundo da Tecnologia está em constante transformação, e é por isso que estudei as seguintes Ferramentas e Tecnologias: JavaScript, TypeScript, HTML5, Css3, Git & GitHub, React, Redux, Context API & Hooks, styled-Components, SASS, Material UI, Jest, RTL, Figma, Docker, MySql e NodeJs.
        </p>
        <p>
          Sou uma Pessoa organizada, solucionadora de problemas, funcionário independente com grande atenção aos detalhes. Fã de MMA, atividades ao ar livre, séries, anime, manga e filosofia.
        </p>        
      </ContainerP>
    </ContainerAbout>      
  );
};

export default About;
