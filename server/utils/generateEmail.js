const nodemailer = require("nodemailer");
// const { GMAIL_ID, APP_PASSWORD } = process.env;

const GMAIL_ID = 'cokoboaa1997@gmail.com'
const APP_PASSWORD = 'nhalaushfosxraud'

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: GMAIL_ID,
    pass: APP_PASSWORD
  }
});

const sendMailToUser = async (email) => {
  try {
    let html =`
    <h1>Thanks for choosing our application !</h1>
  ` 
    await transport.sendMail({
      from: GMAIL_ID,
      to: email,
      subject: "INR to USD currencies",
      html: html
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = sendMailToUser;
