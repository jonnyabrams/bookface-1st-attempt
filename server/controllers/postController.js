import Post from '../models/PostModel.js'

export const createPost = async (req, res) => {
  const newPost = new Post(req.body)

  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
  
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json("Post updated!")
    } else {
      res.status(403).json('You can only edit your own posts')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
  
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json("Post deleted")
    } else {
      res.status(403).json('You can only delete your own posts')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } })
      res.status(200).json("Post liked!")
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } })
      res.status(200).json("Post unliked")
    }   
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}