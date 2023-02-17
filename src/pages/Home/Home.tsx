import React from 'react';
import styled from 'styled-components';
import About from '../../components/About/About';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import MySkill from '../../components/My Skills/MySkill';

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Home = (): JSX.Element => {
  return (
    <ContainerMain>      
        <AboutMe />        
        <About />        
        <MySkill />
        <Contact />      
    </ContainerMain>
  )
}

export default Home;
