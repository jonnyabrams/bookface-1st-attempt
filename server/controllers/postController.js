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