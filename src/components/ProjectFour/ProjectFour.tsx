import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ContainerSlider,
  Img,
  ContainerButton,
  ButtonDeploy,
  ButtonRepositories,
} from './ProjectFourStyle'

interface CarouselProps {
  project: {
    name: string;
    repositories: string;
    deploy: string;
    photo1: string;
    photo2: string;
    photo3: string;
  }
}

const ProjectFour: React.FC<CarouselProps> = ({ project }): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerSlider>
      <h4>{project.name}</h4>
      <Slider {...settings} >
        <div>
          <Img src={project.photo1} alt={`Projeto ${project.name}`} />      
        </div>
         <div>
          <Img src={project.photo2} alt={`Projeto ${project.name}`} />        
        </div>
        <div>
          <Img src={project.photo3} alt={`Projeto ${project.name}`} />    
        </div>      
      </Slider>
      <ContainerButton>
        <ButtonDeploy href={project.deploy} target='_blank'>Deploy</ButtonDeploy>
        <ButtonRepositories href={project.repositories} target='_blank'>Repositório</ButtonRepositories>
      </ContainerButton>
    </ContainerSlider>
  )
}

export default ProjectFour;
