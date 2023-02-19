import styled from 'styled-components';
import About from '../../components/About/About';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import MySkill from '../../components/My Skills/MySkill';
import ProjectPrincipal from '../../components/ProjectPrincipal/ProjectPrincipal';

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: React.FC = (): JSX.Element => {
  return (
    <ContainerMain>      
      <AboutMe />        
      <About />        
      <MySkill />
      <ProjectPrincipal />
      <Contact />      
    </ContainerMain>
  );
};

export default Home;
