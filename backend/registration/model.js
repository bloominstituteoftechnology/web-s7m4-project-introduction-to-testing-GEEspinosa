const { userSchema } = require('../../shared/schemas')
const names = require('./data.json')

const validateUser = async data => {
  try {
    const valid = await userSchema.validate(data)
    return [null, valid]
  } catch (err) {
    const error = err.message
    return [error, null]
  }
}

const validate = async (req, res, next) => {
  const [error, validated] = await validateUser(req.body)
  if (error) {
    next({ message: error, status: 422 })
  } else if (names.find(name => name == validated.username)) {
    next({ message: `Sorry! The username ${validated.username} is taken`, status: 409 })
  } else {
    req.body = validated
    next()
  }
}

module.exports = {
  validate,
}
