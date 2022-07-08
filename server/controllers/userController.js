import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // if user tries to update password, generate a new one
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        res.status(500).json(error)
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      })
      res.status(200).json('Account updated')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only update your own account")
  }
}

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('Account deleted')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only delete your own account")
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}