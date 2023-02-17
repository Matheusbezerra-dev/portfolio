import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import GlobalStyle from './style/GlobalStyle.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>    
      <GlobalStyle />
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />          
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
)
