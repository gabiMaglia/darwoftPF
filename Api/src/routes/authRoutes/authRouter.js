const { Router } = require('express')
const { loginHandler, singInHandler, logOutHandler, confirmAccountHandler } = require('../../handlers/authHandler')
const authRouter = Router()

authRouter.post('/login', loginHandler)
authRouter.post('/singin', singInHandler)

authRouter.post('/logout/:id', logOutHandler)

authRouter.get('/auth/:token', confirmAccountHandler)


module.exports = authRouter