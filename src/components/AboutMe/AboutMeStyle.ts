import styled from "styled-components";


export const ContainerAboutMe = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  /* margin-bottom: 6rem;  */
  flex-wrap: wrap-reverse;
  align-items: center;
`;

export const ContainerH1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.2rem;
  @media (max-width: 420px) {
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 20rem;
  padding: 2rem;
`;

export const ContainerP = styled.div`
  margin-bottom: 0.8rem;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

export const ContainerButton = styled.a`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const ButtonCV = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem;
  width: 8.5rem;
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 1rem;
  color: #fff;
  background-color: #8257E6;
  :hover{
    transition: 400ms;
    background-color: #4c007d;
  }
  @media (max-width: 450px) {
    width: 20rem;
    margin-top: 1.5rem;
  }
`;

export const ButtonContact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-decoration: none;
  width: 11rem;
  height: 2.5rem;
  border-radius: 1rem;
  :hover {
    color: #fff;
    transition: 400ms;
    background-color: #4c007d;
  };
  @media (max-width: 450px) {
    width: 20rem;
    margin-top: 1.5rem;
  }
`;
