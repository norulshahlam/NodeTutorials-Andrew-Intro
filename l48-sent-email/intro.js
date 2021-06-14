/* sample of how to initialize and sent email. run this file n check your email. beloqw is the boilerplate all taken from the site */

const sgMail = require("@sendgrid/mail");

//your api key
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);
const msg = {
  to: "norulshahlam@gmail.com", // Change to your recipient
  from: "norulshahlam@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
