import express from 'express'
import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

const router = express.Router()

// register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
})

export default router