const nodemailer = require('nodemailer')
const { EMAIL, PASSWORD } = require('./../env')
const Mailgen = require('mailgen')

const signup = async (req, res) => {
  
  let testAccount = await nodemailer.createTestAccount()

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "¿porqué no se muestra pues?", // plain text body
    html: "<b>¿porqué no se muestra pues?</b>", // html body
  });
  
  res.status(201).json({
    msg: 'you should receive an email',
    info: info.messageId,
    preview: nodemailer.getTestMessageUrl(info)
  })

}

const getbill = async (req, res) => {

  const { userEmail, userName } = req.body

  let config = {
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  }

  let transporter = nodemailer.createTransport(config)

  let MailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Mailgen',
      link: 'https://mailgen.js/'
    }
  })

  let response = {
    body: {
      name: userName,
      intro: 'Your bill has arrived',
      table: {
        data: [
          {
            item: 'Nodemailer Stack Book',
            description: 'A backend application',
            price: '$10.99'
          }
        ]
      },
      outro: 'Nos vemos parcerito'
    }
  }

  let mail = MailGenerator.generate(response)

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: 'Una bella orden de prueba',
    html: mail
  }

  const resp = await transporter.sendMail(message)

  res.status(201).json({msg: "You should receive an email"})
}

module.exports = {
  signup,
  getbill
}