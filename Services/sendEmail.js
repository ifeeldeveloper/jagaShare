const nodemailer = require('nodemailer')

const sendEmail = async (data)=>{
   const transporter =  nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'jiwanbhatta07@gmail.com',
            pass : 'zfdwrcnahsrinjln'
        }
    })
    const mailOptions = {
        from : "jagaShare<dptest1230@gmail.com>",
        to : data.gmail,
        subject : data.subject,
        text : data.message,
        attachments : data.files
    }
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail