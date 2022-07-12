import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, getUserPosts, likePost, updatePost } from '../controllers/postController.js'

const router = express.Router()

router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id', getPost)
router.get('/profile/:username', getUserPosts)
router.get('/timeline/:userId', getTimelinePosts)

export default router