import { useEffect, useState } from 'react'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'
import axios from 'axios'
import { useParams } from 'react-router'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  }, [username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className='profile-cover-image' src={user.coverPicture || PF + 'default-cover.jpeg'} alt="" />
              <img className='profile-user-image' src={user.profilePicture || PF + 'default-profile.png'} alt="" />
            </div>
            <div className="profile-info">
              <h4 className='profile-info-name'>{user.username}</h4>
              <span className='profile-info-description'>{user.description}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile