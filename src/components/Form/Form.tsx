import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const ContainerForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
  gap: 0.7rem;
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 0.7rem;
  }
`;

const Button = styled.button`
  width: 11rem;
  height: 2.5rem;
  border-radius: 1rem;
  border: 1px solid #4c007d;
  color: #fff;
  font-weight: bold;
  background-color: #4c007d;
  :hover{
    transition: 800ms;
    background: none;
    color: #4c007d;
    font-weight: bold;
  }
`;

type FormValues = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

const Form: React.FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    // Aqui você pode fazer algo com os valores do formulário, como enviar para um servidor ou armazenar localmente.
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ContainerInput>
        <TextField
        type="text"
        fullWidth
        name="name"
        label="Nome"
        variant="outlined"
        value={formValues.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        fullWidth
        variant="outlined"
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      </ContainerInput>
      
      <TextField
        label="Assunto"
        variant="outlined"
        fullWidth
        type="text"
        name="subject"
        value={formValues.subject}
        onChange={handleChange}
      />
      <TextField
        label="Descrição"
        multiline
        fullWidth
        rows={4}
        // defaultValue="Default Value"
        name="description"
        value={formValues.description}
        onChange={handleChange}
      />
      <Button
        type="submit"
      >
        Enviar
      </Button>
    </ContainerForm >
  );
};

export default Form;
