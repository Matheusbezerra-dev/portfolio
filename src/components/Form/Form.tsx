import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const ContainerForm = styled.form`
  display: flex;
  flex-wrap: wrap;
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
      <button
        type="submit"
      >
        Enviar
      </button>
    </ContainerForm >
  );
};

export default Form;
