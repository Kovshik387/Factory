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
    const requestInfo = req.body as BidInfo;
    console.log(req.body)
    try {
        const info = await transporter.sendMail({
            from: `"Ударник" <${emailSettings.email}>`,
            to: emailSettings.to,
            subject: 'Заявка на заказ',
            html: `
            <p>ФИО: ${requestInfo.FIO}</p>
            <p>Контакты: ${requestInfo.contacts}</p>
            `,
        })
        console.log(info),
        res.status(200).json({ info: info })
    }
    catch(error) {
        res.status(400).json({error: error})
    }
})
export { router }