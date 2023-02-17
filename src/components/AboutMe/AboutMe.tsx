import cv from '../../service/MatheusBezerradosSantos.pdf'
import ft from '../../images/fotoDePerfil.jpg';
import {
  ContainerAboutMe,
  Img,
  ContainerH1,
  ContainerP,
  ButtonCV,
  ButtonContact,
  ContainerButton,  
} from './AboutMeStyle';

const AboutMe: React.FC = (): JSX.Element => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = '[DEV]Matheus Bezerra dos Santos.pdf';
    link.target = '_blank';
    link.click();
  };
  return (
    <ContainerAboutMe>
      <div>
        <ContainerH1>
          <h1>Olá,</h1>
          <h1>sou <strong>Matheus Bezerra</strong></h1>
          <h3>Desenvolvedor Web</h3>
        </ContainerH1>
        <ContainerP>
          <p>Apaixonado por tecnologia, desenvolvimento e apreendizado.</p>
        </ContainerP>
        <ContainerButton>
          <ButtonCV
            onClick={handleClick}
          >
            Download CV
          </ButtonCV>
          <ButtonContact
            href='mailto:mabezerra2@gmail.com'
            target='_blank'
          >
            Entrar em contato
          </ButtonContact>
        </ContainerButton>        
      </div>
      <div>
        <Img src={ ft } alt="foto de perfil" />
      </div>
      
    </ContainerAboutMe>
  )
}

export default AboutMe;
