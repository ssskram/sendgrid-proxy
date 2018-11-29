// sends email via sendgrid

const express = require('express')
const router = express.Router()
const checkToken = require('../token')
const sgMail = require('@sendgrid/mail')

const body = {
  to: 'paul.marks@pittsburghpa.gov',
  from: 'paul.marks@pittsburghpa.gov',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}

// send single email
router.post('/single',
  async function (req, res) {
    const valid = (checkToken(req.token))
    if (valid == true) {
      sgMail.setApiKey(process.env.SENDGRID)
      const msg = body
      sgMail.send(msg)
    } else res.status(403).end()
  }
)

module.exports = router