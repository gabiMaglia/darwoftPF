const transporter = require("./nodemailerInstance");

const sendConfirmationEmail = async (
  adminEmail,
  userEmail,
  jwtToken,
  gateway
) => {
  const confirmationUrl = `${gateway}/auth/confirm/${jwtToken}`;
  return transporter.sendMail({
    from: adminEmail,
    to: userEmail,
    subject: "Confirm to continue!",
    html: `
        <a href="${confirmationUrl}" >
        <button
          style="
            align-items: center;
            width: 200px;
            height: 50px;
            background-color: rgb(253, 97, 26);
            color: white;
            font-size: 1em;
            font-weight: bold;
            border-radius: 10px;
            margin: 0 150px 0 150px;
          "
        >
          Confirm Email
        </button>
      
        <b style="max-width: 300px; font-size: small; color: black;word-break: break-all;">${confirmationUrl}</b>
  
        `,
  }).then(() => userEmail);
};
const sendResetPasswordEmail = async (  
    adminEmail,
    userEmail,
    jwtToken,
    gateway
  ) => {
    const resetPasswordUrl = `${gateway}/change_password/${jwtToken}`;
    return transporter.sendMail({
        from: adminEmail,
        to: userEmail,
        subject: "Password Reset!",
        html: `
        <a href="${resetPasswordUrl}" >
        <button
          style="
            align-items: center;
            width: 200px;
            height: 50px;
            background-color: rgb(253, 97, 26);
            color: white;
            font-size: 1em;
            font-weight: bold;
            border-radius: 10px;
            margin: 0 150px 50px 150px;
          "
        >
          Reinicio de contrasena
        </button>

        <b style="max-width: 300px; text-decoration:none;  font-size: small; color: white;word-break: break-all;">${resetPasswordUrl}</b>
        `
    })
}

module.exports = { sendConfirmationEmail, sendResetPasswordEmail };