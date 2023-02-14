import React, { useState } from 'react';
import Form from '../Form/Form';

const Contact: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (values: any) => {
    const response = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    setEmailSent(true);
  };

  return (
    <div>
      {emailSent ? (
        <p>Email sent!</p>
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Contact;