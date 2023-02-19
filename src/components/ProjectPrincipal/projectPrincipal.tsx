// import { Link } from "react-router-dom";
import projectFour from "../../service/projectFour";
import ProjectFour from "../ProjectFour/ProjectFour";
import {
  ContainerProjectPrincipal,
  ContainerSlider,
  LinkRepositorie,
} from './ProjectPricipalStyle'

const ProjectPrincipal: React.FC = (): JSX.Element => {
   return (
    <ContainerProjectPrincipal>
      <h2>Projetos</h2>
      <ContainerSlider>
        {projectFour.map((obj) => <ProjectFour key={obj.name} project={{
          name: obj.name,
          repositories: obj.repositories,
          deploy: obj.deploy,
          photo1: obj.photo1,
          photo2: obj.photo2,
          photo3: obj.photo3,
        }} />)}
      </ContainerSlider>
      <LinkRepositorie to='/projects'>
        Click aqui para ver mais projetos
      </LinkRepositorie>
    </ContainerProjectPrincipal>
  )
}

export default ProjectPrincipal;
