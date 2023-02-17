import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: #4b1c71;
  border-bottom: 2px solid #8257E6;
  a {
    color: #fff0ff;
    text-decoration: none;
    :hover {
      transition: 800ms;
      color: #aaa;      
      border-bottom: 1px solid #aaa; 
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