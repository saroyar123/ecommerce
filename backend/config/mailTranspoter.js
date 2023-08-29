const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "12a59d5ee9acdc",
      pass: "5fba1769b31a02"
    }
  });


module.exports=transport