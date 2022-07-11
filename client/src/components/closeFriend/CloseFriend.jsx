import './close-friend.css'

const CloseFriend = ({ user }) => {
  return (
    <li className="leftbar-friend">
      <img className='leftbar-friend-image' src={user.profilePicture} alt="" />
      <span className="leftbar-friend-name">{user.username}</span>
    </li>
  )
}

export default CloseFriend