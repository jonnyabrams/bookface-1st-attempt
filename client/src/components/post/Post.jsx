import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-image' src="/assets/profile/1.webp" alt="" />
            <span className="post-username">Bobson Dugnutt</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Oi oi oiiii</span>
          <img className='post-image' src="assets/stock/1.jpeg" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className='like-icon' src="assets/like.png" alt="" />
            <img className='like-icon' src="assets/heart.png" alt="" />
            <span className="post-like-counter">32 people like this</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post