import express from 'express'
import User from '../models/UserModel.js'

const router = express.Router()

// register
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
})

export default router