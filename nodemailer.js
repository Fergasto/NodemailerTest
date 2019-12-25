const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'leonora.balistreri@ethereal.email',
        pass: 'tBzRe8UjKNcKex3H3V'
    }
    },
    {
    from: `Mailer Test <leonora.balistreri@ethereal.email>`,
})

const mailer = message => {
    transporter.sendMail (message, (err, info)=>{
        if(err) return console.log(err)
        console.log ('Email send: ',info)
    })
}

module.exports = mailer