import React from 'react';
import cv from '../../service/MatheusBezerradosSantos.pdf'

const AboutMe = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = '[DEV]Matheus Bezerra dos Santos.pdf';
    link.target = '_blank';
    link.click();
  };
  return (
    <section>
      <div>
        <h1>Olá, sou <strong>Matheus Bezerra</strong></h1>
        <h3>desenvolvedor web</h3>
      </div>
      <div><p>Apaixonado por tecnologia, desenvolvimento e apreendizado.</p></div>
      <div>
        <button onClick={handleClick}>Baixar PDF</button>      
      </div>

    </section>
  )
}

export default AboutMe;
