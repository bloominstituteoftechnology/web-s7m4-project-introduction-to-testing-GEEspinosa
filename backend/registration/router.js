const router = require('express').Router()
const Registration = require('./model.js')

router.get('/docs', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Registration API</title>
</head>
<body>
  <h1>Registration API</h1>
  <p>Available endpoints:</p>
  <ul>
    <li>[POST] /api/register</li>
  </ul>
</body>
</html>
`)
})

router.post('/', Registration.validate, (req, res) => {
  res.status(201).json({
    message: `Success! Welcome, ${req.body.username}!`,
    data: req.body,
  })
})

module.exports = router
