import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'gwmkwan@gmail.com', // Your email where you'll receive emails
      from: 'gwmkwan@gmail.com', // your website email address here
      subject: `[Lead from portfolio page] :${req.body.subject}`,
      html: `<!DOCTYPE html>
      <html>
  <head>
    <title>Email from portfolio page</title>
  </head>
  <body>
    <div style="font-family: sans-serif; border-radius: 5px; overflow: hidden;">
      <div style="background: #ff4500; padding: 5px; color: white;">
        <h2>New message from ${req.body.fullname}</h2> 
      </div>
      <div style="padding: 20px;">
        <p>📧 <strong>Email:</strong> ${req.body.email}</p> 
        ${
          req.body.phone
            ? `<p>☎️ <strong>Phone:</strong> ${req.body.phone}</p>`
            : ''
        }
        <p>✏️ <strong>Message:</strong></p>
        <p>${req.body.message}</p>
      </div>
    </div>
  </body>
  </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
