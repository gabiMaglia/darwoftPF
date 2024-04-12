const { Router } = require('express')
const { login, singIn, singOut } = require('../handlers/authHandler')
const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/singin', singIn)

authRouter.post('/logout/:id', singOut)


module.exports = authRouter