const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Create a nodemailer transporter using your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nexahcm@gmail.com',
    pass: 'ldwc bwqk efun bjfz'
  }
});

exports.sendContactEmail = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    
    const mailOptions = {
      from: 'nexahcm@gmail.com',
      to: 'nexahcm@gmail.com',
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Timestamp:</strong> ${data.timestamp.toDate().toLocaleString()}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      
      // Update the contact document to mark it as notified
      await snap.ref.update({
        emailSent: true,
        emailSentTimestamp: admin.firestore.FieldValue.serverTimestamp()
      });
      
      return null;
    } catch (error) {
      console.error('Error sending email:', error);
      return null;
    }
  });