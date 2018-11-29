// sends email via sendgrid

const express = require('express')
const router = express.Router()
const checkToken = require('../token')

const body = {

}

// send single email
router.post('/single',
  async function (req, res) {
    const valid = (checkToken(req.token))
    if (valid == true) {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.SENDGRID)
      const msg = req.body
      sgMail.send(msg)
    } else res.status(403).end()
  }
)

module.exports = router