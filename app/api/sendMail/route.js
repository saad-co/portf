import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the JSON body of the request
        const { name, userEmail, phone, subject, message } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER, // Sender email
            replyTo: userEmail, // Reply-to address
            to: process.env.RECIPIENT_EMAIL, // Recipient email
            subject: `New Message from ${name}: ${subject}`,
            text: `You have received a new message:\n\nName: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: "Email sent successfully!" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send email." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
