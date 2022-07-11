import './online.css'

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-image-container">
        <img src={PF + user.profilePicture} alt="" className="rightbar-profile-image" />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  )
}

export default Online