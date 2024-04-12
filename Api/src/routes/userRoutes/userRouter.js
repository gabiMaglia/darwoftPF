const { Router } = require('express')
const { getUserHandler, getUserbyIdHandler, postUserHandler, updateUserHandler, deleteUserHandler } = require('../../handlers/users/userHandlers')

const userRouter = Router()

userRouter.get('/', getUserHandler)
userRouter.get('/:id', getUserbyIdHandler)
userRouter.post('/', postUserHandler)
userRouter.patch('/:id', updateUserHandler)
userRouter.delete('/:id', deleteUserHandler)


module.exports = userRouter