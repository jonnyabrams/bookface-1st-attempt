import './close-friend.css'

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  
  return (
    <li className="leftbar-friend">
      <img className='leftbar-friend-image' src={PF + user.profilePicture} alt="" />
      <span className="leftbar-friend-name">{user.username}</span>
    </li>
  )
}

export default CloseFriend