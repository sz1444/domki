import { EMAIL } from '@/app/static/contact';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        let { to, subject, message } = await request.json();

        if (!subject || !message) throw new Error('Wystąpił błąd');

        if (!to) to = EMAIL; 

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        const mailOption = {
            from: 'Domki Na Mazurach',
            to: 'arkadiuszwierzbicki1@wp.pl',
            subject: subject,
            html: message
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}