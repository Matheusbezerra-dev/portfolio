import styled from 'styled-components';
import About from '../../components/About/About';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import Map from '../../components/Map/Map';
import MySkill from '../../components/My Skills/MySkill';
import ProjectPrincipal from '../../components/ProjectPrincipal/projectPrincipal';

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
      <Map />  
    </ContainerMain>
  );
};

export default Home;
