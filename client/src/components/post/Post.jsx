import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Users } from '../../dummyData'

const Post = ({ post }) => {

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-image' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="post-username">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.content}</span>
          <img className='post-image' src={post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className='like-icon' src="assets/like.png" alt="" />
            <img className='like-icon' src="assets/heart.png" alt="" />
            <span className="post-like-counter">{post.likes}</span>
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