import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, projectType, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return Response.json(
        { message: 'Missing required fields (Name, Email, Message)' },
        { status: 400 }
      );
    }

    // 2. Sanitization (Strip HTML tags to prevent bad characters)
    const sanitize = (str) => {
      if (!str) return '';
      return str.replace(/<[^>]*>?/gm, '').trim();
    };

    const safeName = sanitize(name);
    const safeCompany = sanitize(company);
    const safeEmail = sanitize(email);
    const safeProjectType = sanitize(projectType);
    const safeMessage = sanitize(message);

    // 3. Nodemailer Configuration
    // Ensure you have these environment variables set in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App Password if using Gmail
      },
    });

    const receiverEmail = process.env.CONTACT_EMAIL || 'vimlesai@duck.com';

    // 4. Email formatting with Tags for filtering
    const mailOptions = {
      // Use your authenticated email to send, to prevent SMTP rejection
      from: `Portfolio Contact Form <${process.env.SMTP_USER || receiverEmail}>`,
      // Set Reply-To so you can hit 'Reply' directly in Gmail
      replyTo: safeEmail,
      to: receiverEmail,
      // Tag included for easy Gmail filtering
      subject: `[Portfolio Inquiry] ${safeProjectType} - from ${safeName}`,
      text: `
You have received a new inquiry from your portfolio website.

=========================================
SENDER DETAILS
=========================================
Name: ${safeName}
Email: ${safeEmail}
Company: ${safeCompany || 'N/A'}
Project Type: ${safeProjectType}

=========================================
MESSAGE
=========================================
${safeMessage}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json(
      { message: 'Failed to send message', error: error.message },
      { status: 500 }
    );
  }
}
