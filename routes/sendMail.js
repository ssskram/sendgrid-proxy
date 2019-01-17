// sends email via sendgrid

const express = require('express')
const router = express.Router()
const checkToken = require('../token')
const sgMail = require('@sendgrid/mail')

// send single email
router.post('/single',
  async function (req, res) {
    const valid = (checkToken(req.token))
    if (valid == true) {
      sgMail.setApiKey(process.env.SENDGRID)
      const msg = req.body
      try {
        const response = await sgMail.send(msg)
      } catch (error) {
        res.status(500).send(error).end()
      }
      res.status(202).end()
    } else res.status(403).end()
  }
)

module.exports = router