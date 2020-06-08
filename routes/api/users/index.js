const express = require('express')
const router = express.Router()
const User = require('../../../models/User')

router.get('/', (req, res) => {
  res.send("hello world")
})

// Register new user
router.post('/register', async(req, res) => {
  let { name, username, email, password, confirm_password } = req.body;

  //Check if password matches
  if (password !== confirm_password) {
    throw new Error('Passwords do not match')
  }
})

module.exports = router