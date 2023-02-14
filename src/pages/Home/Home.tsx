import React from 'react';
import About from '../../components/About/About';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import MySkill from '../../components/My Skills/MySkill';

const Home = (): JSX.Element => {
  return (
    <main>
      {'<body>'}
        <AboutMe />
        <About />
        <MySkill />
        <Contact />
      {'</body>'}
    </main>
  )
}

export default Home;
