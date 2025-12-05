import { Request, Response } from 'express'; 
import nodemailer from 'nodemailer';

class EmailController {
  async handle(request: Request, response: Response) {
    const { email, subject, html } = request.body;

    if (!email || !html) {
      return response.status(400).json({ message: 'Email e conteúdo HTML são obrigatórios.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // 2. Envio
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email, 
        subject: subject,
        html: html,
      });

      return response.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Erro ao enviar email' });
    }
  }
}

export default new EmailController();