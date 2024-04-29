const { Router } = require("express");
const {
  getUserHandler,
  getUserbyIdHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../../handlers/users/userHandler");

const wishListRouter = require("./wishListRouter");
const { isAutenticated } = require("../../middleware/tokenAuthMiddlewares");



const userRouter = Router();

/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '.src/db/conn/User.js'
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully.
 */
userRouter.route('/')
  .get(getUserHandler)
  .delete(isAutenticated, deleteUserHandler)
  /**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '.src/db/conn/User.js'
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update a user by ID
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '.src/db/conn/User.js'
 *     responses:
 *       200:
 *         description: User updated successfully.
 */
userRouter.route('/:id')
  .get(getUserbyIdHandler)
  .patch( isAutenticated, updateUserHandler)
  
userRouter.use("/wishlist",  wishListRouter);
 

module.exports = userRouter;
