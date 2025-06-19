require("dotenv").config();


const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./")); // Serve your HTML and assets

// POST route to handle contact form
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
}

  });

  const mailOptions = {
    from: email,
    to: "info@quickstartus.com",
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Email error:", error);
    return res.status(500).send("Error sending email.");
  }
  res.redirect("/?message=success");
});


});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
