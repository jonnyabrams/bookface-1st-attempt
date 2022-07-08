import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)

export default router