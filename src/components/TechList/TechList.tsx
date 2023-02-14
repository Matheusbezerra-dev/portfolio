import React from 'react'
import {
  Containertech,
  Imgtech,
} from './TechListStyle'

interface TechListProps {
  techList: {
    tech: string;
    image: string;
  }
}

const TechList: React.FC<TechListProps> = ({ techList }): JSX.Element => {
  return (
    <Containertech>
      <Imgtech 
        src={techList.image}
        alt={techList.tech}
      />
      <h3>{techList.tech}</h3>      
    </Containertech>
  )
}

export default TechList
