const transporter = require("./nodemailerInstance");

const sendConfirmationEmail = async (
  adminEmail,
  userEmail,
  jwtToken,
  gateway
) => {
  const confirmationUrl = `${gateway}/auth/confirm/${jwtToken}`;
  return transporter
    .sendMail({
      from: adminEmail,
      to: userEmail,
      subject: "Confirm to continue!",
      html: `
        <a href="${confirmationUrl}" >
        <button
          style="
  
          "
        >
          Confirm Email
        </button>
      
        <b style="max-width: 300px; font-size: small; color: black;word-break: break-all;">${confirmationUrl}</b>
  
        `,
    })
    .then(() => userEmail);
};

const sendResetPasswordEmail = async (
  adminEmail,
  userEmail,
  jwtToken,
  gateway
) => {

  const resetPasswordUrl = `${gateway}/changepassword/${jwtToken}`;
  return transporter
    .sendMail({
      from: adminEmail,
      to: userEmail,
      subject: "Password Reset!",
      html: `
        <a href="${resetPasswordUrl}" >
        <button
          style="
         
          "
        >
          Password reset
        </button>

        <b style="max-width: 300px; text-decoration:none;  font-size: small; color: white;word-break: break-all;">${resetPasswordUrl}</b>
        `,
    })
    .then(() => userEmail);
};

module.exports = { sendConfirmationEmail, sendResetPasswordEmail };
