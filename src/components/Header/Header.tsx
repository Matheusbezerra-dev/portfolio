import { Link } from 'react-router-dom';
import {
  ContainerHeader,
  Nav,
  Div,
} from './HeaderStyle';

const Header: React.FC = (): JSX.Element => {
  return (
    <ContainerHeader>
      <Div>
        <Link to='/'>
          Bezerra.
        </Link>
      </Div>
      <Nav>
        <Link to='/'>
          Home
        </Link>
        <a href='#about'>
          Sobre min
        </a>
        <a href='#my-skills'>
          Minha Habilidade
        </a>
        <a href='#projects'>
          Projetos
        </a>
        <a href='#contact'>
          Contate-me
        </a>        
      </Nav>
    </ContainerHeader>
  )
}

export default Header;
