// server.ts
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'mabezerra2@gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'mabezerra2@gmail.com',
    pass: 'M@83be57',
  },
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: 'recipient@example.com',
    subject: 'New message from contact form',
    text: message,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  console.log(res)
  res.json({ message: 'Email sent' });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
