import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user: currentUser } = useContext(AuthContext) // user: currentUser as I was already using user in useState hook

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    try {
      axios.put('/post/' + post._id + '/like', { userId: currentUser._id })
    } catch (error) {
      console.log(error)
    }
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img className='post-profile-image' src={user.profilePicture ? PF + user.profilePicture : PF + 'default-profile.png'} alt="" />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.content}</span>
          <img className='post-image' src={PF + post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className='like-icon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className='like-icon' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="post-like-counter">{likes}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post