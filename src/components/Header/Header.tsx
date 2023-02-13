import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Link to='/home'>
          <img
            src=''
            alt=''
          />
        </Link>
      </div>
      <nav>
        <Link to='/about'>
          Sobre min
        </Link>
        <Link to='/contact'>
          Contate-me
        </Link>
        <Link to='/my-skills'>
          Minha Habilidade
        </Link>
        <Link to='/projects'>
          Projetos
        </Link>
      </nav>
    </header>
  )
}

export default Header;
