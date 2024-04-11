const { Router } = require('express')
const { getUserHandler, postUserHandler, updateUserHandler, deleteUserHandler } = require('../../handlers/users/userHandlers')

const userRouter = Router()

userRouter.get('/', getUserHandler)
userRouter.post('/', postUserHandler)
userRouter.patch('/', updateUserHandler)
userRouter.delete('/', deleteUserHandler)


module.exports = userRouter