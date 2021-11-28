const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
          user: 'amitk10072000@gmail.com',
          pass: 'MasterPASSWORD'
        }
      });
    var mailOptions = {
        from : from,
        to: to, 
        subject: subject,
        text: text,
        html: html
    }  
    
    let info = await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}