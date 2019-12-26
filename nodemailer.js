const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'ufimtsev_egora@mail.ru',
        pass: 'fergastospow'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
},
{from: `Mailer Test <ufimtsev_egora@mail.ru>`}
)

const mailer = message => {
    transporter.sendMail (message, (err, info)=>{
        if(err) return console.log(err)
        console.log ('Email send: ',info)
    })
}

module.exports = mailer