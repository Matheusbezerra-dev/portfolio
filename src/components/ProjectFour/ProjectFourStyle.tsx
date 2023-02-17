import styled from "styled-components";

export const ContainerSlider = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 25rem; 
  height: 20rem;
  padding: 1rem;
  h4 {
    margin-bottom: 1rem;
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
  background-color: purple;
  color: #fff;
  text-decoration: none;
`;

export const ButtonRepositories = styled.a`
  background-color: #8257E6;
  color: #fff;
  text-decoration: none;
`;
