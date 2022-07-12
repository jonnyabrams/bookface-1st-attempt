import express from 'express'
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/', getUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)

export default router