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
        <Link to='/about'>
          Sobre min
        </Link>
        <Link to='/my-skills'>
          Minha Habilidade
        </Link>
        <Link to='/projects'>
          Projetos
        </Link>
        <Link to='/contact'>
          Contate-me
        </Link>        
      </Nav>
    </ContainerHeader>
  )
}

export default Header;
