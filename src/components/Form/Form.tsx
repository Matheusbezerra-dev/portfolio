import React, { useState } from 'react';


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
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Assunto:
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Descrição:
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
