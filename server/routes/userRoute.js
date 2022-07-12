import express from 'express'
import { deleteUser, followUser, getUser, getUserFriends, unfollowUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/', getUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.get('/friends/:userId', getUserFriends)

export default router