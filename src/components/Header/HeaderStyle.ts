import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  border-bottom: 2px solid #8257E6;
  a {
    color: black;
    text-decoration: none;
    :hover {
      transition: 800ms;
      color: #4c007d;
      border-bottom: 1px solid #4c007d; 
    }
  }
`;

export const Nav = styled.nav`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const Div = styled.div`  
  padding: 1rem 2.5rem;
`;