const { Router } = require('express')
const { loginHandler, singInHandler, logOutHandler } = require('../../handlers/authHandler')
const authRouter = Router()

authRouter.post('/login', loginHandler)
authRouter.post('/singin', singInHandler)

authRouter.post('/logout/:id', logOutHandler)


module.exports = authRouter