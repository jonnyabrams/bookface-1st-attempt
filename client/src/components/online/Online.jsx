import './online.css'

const Online = ({ user }) => {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-image-container">
        <img src={user.profilePicture} alt="" className="rightbar-profile-image" />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  )
}

export default Online