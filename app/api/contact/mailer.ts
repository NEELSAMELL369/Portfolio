import nodemailer from 'nodemailer';

export const sendMail = async ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Contact Message from ${name}`,
        text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
};
