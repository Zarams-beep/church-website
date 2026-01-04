import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

const adminMailOptions = {
  from: process.env.SMTP_USER,
  to: process.env.SMTP_USER,
  replyTo: email,
  subject: `New Contact Form Submission - ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phoneNumber}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
};

    // Confirmation email to User
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Seekers of His Kingdom',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Dear ${firstName} ${lastName},</p>
          <p>We have received your message and appreciate you taking the time to contact us.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          
          <p>Our team will review your message and get back to you as soon as possible.</p>
          
          <p>Best regards,<br/>
          <strong>Seekers of His Kingdom</strong></p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #666;">
            Email: seekersofhiskingdomglobal@gmail.com<br/>
            Phone: +234 123 456 789<br/>
            Location: Victoria Island, Lagos
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}