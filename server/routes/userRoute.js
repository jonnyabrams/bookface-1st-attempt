import express from 'express'
import { deleteUser, followUser, getUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)
router.put('/:id/follow', followUser)

export default router