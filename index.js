const express = require('express')

const app = express()

const PORT = 3001;

const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

let user = undefined

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/registration',(req, res) => {
    if (!req.body.email || !req.body.pass) return res.sendStatus (400)
    const message = {
    
        to: req.body.email,
        subject: 'Congratulation! You are successfully registration on our site',
        text: `Поздравляем, вы успешно зарегистрировались на нашем сайте!

        данные вашей учетной записи:
        login: ${req.body.email}
        password: ${req.body.pass}
        `,
    }
    mailer(message)
    user = req.body
    res.redirect('/registration')
    
})
app.get('/registration', (req, res) => {
    if (typeof user !== "object") return res.sendFile(__dirname + '/registration.html')
    res.send(`Регистрация прошла успешно! Данные учетной записи отправленны на email: ${user.email}`)
    user = undefined
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))