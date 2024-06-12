import express from 'express';
import nodemailer from 'nodemailer';

import emailSettings from './emailSettings.json'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface BidInfo { contacts: string, FIO: string }

const router = express.Router();
const transporter = nodemailer.createTransport({
    service: emailSettings.service,
    auth: {
        user: emailSettings.email,
        pass: emailSettings.password,
    },
    logger: true
});
router.post('/', async (req, res) => {
    const requestInfo = req.body as BidInfo;;
    const info = await transporter.sendMail({
        from: `"Ударник" <${emailSettings.email}>`,
        to: "daniltulenev26@gmail.com",
        subject: 'Заявка на заказ',
        html: `
        <p>ФИО: ${requestInfo.FIO}</p>
        <p>Контакты: ${requestInfo.contacts}</p>
        `,
    })
    
    res.json({
        info: info
    })
})
export { router }