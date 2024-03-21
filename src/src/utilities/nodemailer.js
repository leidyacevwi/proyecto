const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASSWORD_GMAIL
    }
});

const sendEmail = (name, email, to) => ({

    // const htmlFilePath = path.resolve("./src/emails/templates/userRegister.html");
    // const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
    // const personalizedHtmlContent = htmlContent.replace(
    // "{{name}}", name)
    // .replace("{{surname}}", surname)
    // .replace("{{email}}", email);
    from: '"Authenticator App 👻" <no-reply@gmail.com>',
    to,
    subject: "Activate Account",
    html: `<h3> Usuario registrado</h3>
    <p> El usuario ${name}} con correo ${email}} se ha registrado con exito. </p>`
})

module.exports = { transporter, sendEmail }


// const sendEmailCode = async (name, surname, email) => {
//   try {
//     const htmlFilePath = path.resolve("./src/emails/templates/userRegister.html");
//     const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
//     const personalizedHtmlContent = htmlContent.replace(
//     "{{name}}", name)
//     .replace("{{surname}}", surname)
//     .replace("{{email}}", email);

//     const response = await transporter.sendMail({
//       to: `jarbir.s.m.r.98@gmail.com`,
//       subject: "Se ha registrado un nuevo usuario en el proyecto semilla",
//       html: personalizedHtmlContent,
//       //yorluis.vega@gmail.com
//     });
//     return response;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// module.exports = { sendEmailCode };
