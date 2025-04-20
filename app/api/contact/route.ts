import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { limiter } from "@/app/lib/rate-limit"
import { headers } from "next/headers"

export async function POST(request: Request) {
    try {
        // Await the headers() call
        const headersList = await headers()
        const ip = headersList.get("x-forwarded-for") || "127.0.0.1"

        try {
            await limiter.check(ip, 3) // 3 requests per minute
        } catch (error) {
            return NextResponse.json(
                {
                    message: `${error}: Too many requests. Please try again later.`
                },
                { status: 429 }
            )
        }

        const { name, email, subject, message } = await request.json()

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            )
        }

        if (!email.includes("@") || !email.includes(".")) {
            return NextResponse.json(
                { message: "Please enter a valid email address" },
                { status: 400 }
            )
        }

        // Create Zoho transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD
            }
        })

        const mailOptions = {
            from: `"Lucky Panda Contact Form" <${process.env.ZOHO_EMAIL}>`,
            replyTo: email,
            to: process.env.CONTACT_FORM_RECIPIENT,
            subject: `New Contact Form: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: 
                ${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #d97706;">New Contact Form Submission</h1>
                    <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
                    <p><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong style="color: #4b5563;">Subject:</strong> ${subject}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
                        <p style="color: #4b5563;"><strong>Message:</strong></p>
                        <p style="white-space: pre-line;">${message}</p>
                    </div>
                    <p style="margin-top: 20px; font-size: 0.8em; color: #9ca3af;">
                        This message was sent from the Lucky Panda Treats contact form.
                    </p>
                </div>
            `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { message: "Failed to send message. Please try again later." },
            { status: 500 }
        )
    }
}
