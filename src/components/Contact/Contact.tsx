import Form from '../../components/Form/Form';
import {
  ContainerContact,  
  Titleh2,
  ContainerForm,
  P,
} from './ContactStyle';

const Contact: React.FC = (): JSX.Element => {
  return (
    <ContainerContact>                
        <Titleh2 id='contact'>Contate-me</Titleh2>       
        <P>
          Estou busca de uma oportunidade no mercado tech – especialmente projetos ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou pergunta, não hesite em usar o formulário.
        </P>
        <ContainerForm>        
          <Form />          
        </ContainerForm>
    </ContainerContact>
  );
};

export default Contact; 