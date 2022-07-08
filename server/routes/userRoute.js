import express from 'express'
import { updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser)

// delete user 

// get a user

// follow user

// unfollow user

export default router