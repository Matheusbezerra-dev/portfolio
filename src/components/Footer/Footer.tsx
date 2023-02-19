import React from 'react'
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <ContainerFooter>
      Criado por Matheus Bezerra
    </ContainerFooter>
  )
}

export default Footer;
