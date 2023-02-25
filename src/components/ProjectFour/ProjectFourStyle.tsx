import styled from "styled-components";

export const ContainerSlider = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 25rem; 
  height: 20rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  h4 {
    margin-bottom: 1rem;
  }
  @media (max-width: 420px){
    width: 21.8rem;
    height: 18rem;
  }
`;

export const ContainerButton = styled.div`
display: flex;
margin-top: 2.5rem;
justify-content: space-around;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 8rem;
    height: 2.1rem;
    border-radius: 1rem;
  }
`;

export const Img = styled.img`
  height: 15rem;
  object-fit: cover;
`;

export const ButtonDeploy = styled.a`
  border-radius: 1rem;
  border: 1px solid #4c007d;
  color: #fff;
  font-weight: bold;
  background-color: #4c007d;
  text-decoration: none;
  :hover{
    transition: 800ms;
    background: none;
    color: #4c007d;
  }
`;

export const ButtonRepositories = styled.a` 
  border: 1px solid black; 
  text-decoration: none;
  border: 1px solid #8257E6;
  font-weight: bold;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  background-color: #8257E6;
  :hover{
    transition: 800ms;
    background-color: #4c007d;
  }
`;
