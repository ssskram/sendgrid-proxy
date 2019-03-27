// sends email via sendgrid

const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

// send single email
router.post("/single", async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID);
  const msg = req.body;
  try {
    const response = await sgMail.send(msg);
  } catch (error) {
    res
      .status(500)
      .send(error)
      .end();
  }
  res.status(200).end();
});

module.exports = router;
