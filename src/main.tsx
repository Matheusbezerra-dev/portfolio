import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import MySkill from './components/My Skills/MySkill';
import Projects from './components/Projects/Projects';
import GlobalStyle from './style/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>    
      <GlobalStyle />
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-skills' element={<MySkill />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
)
