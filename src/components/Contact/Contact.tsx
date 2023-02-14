import Form from '../../components/Form/Form';
import map from '../../images/2.png';

import { ConatinerTechSkill } from '../My Skills/MySkillStyle';
import {
  ContainerGrid,
  ContainerTitle,
  Titleh2,
} from './ContactStyle';

const Contact: React.FC = (): JSX.Element => {
  return (
    <ContainerGrid>
        <ContainerTitle>          
          <Titleh2>Contate-me</Titleh2>          
        </ContainerTitle>
        <div>         
          <p>
            Estou busca de uma oportunidade no mercado tech – especialmente projetos ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou pergunta, não hesite em usar o formulário.
          </p>          
        </div>
        <div>        
          <Form />          
        </div>
    </ContainerGrid>
  );
};

export default Contact;