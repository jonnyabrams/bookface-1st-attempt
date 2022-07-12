import './rightbar.css'
import { Users } from "../../dummyData"
import Online from '../online/Online'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/user/friends/' + user._id)
        setFriends(friendList.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFriends()
  }, [user])

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthday-container">
          <img className="birthday-image" src="assets/gift.png" alt="" />
          <span className="birthday-text">
            <b>Rey McSriff</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbar-title">Online friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    
    return(
      <>
      <h4 className='rightbar-title'>User information</h4>
      <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">{user.city}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">{user.from}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">{user.relationship}</span>
        </div>
      </div>
      <h4 className='rightbar-title'>User friends</h4>
      <div className="rightbar-followings">
        {friends.map((friend) => (
          <Link to={`/profile/${friend.username}`} style={{ textDecoration: 'none' }}>
            <div className="rightbar-following">
              <img src={friend.profilePicture ? PF + friend.profilePicture : PF + 'default-profile.png'} alt="" className="rightbar-following-image" />
              <span className="rightbar-following-name">{friend.username}</span>
            </div>
          </Link>
        ))}
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        { user ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar