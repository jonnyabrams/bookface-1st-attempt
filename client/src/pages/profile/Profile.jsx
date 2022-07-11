import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className='profile-cover-image' src={`${PF}stock/6.jpeg`} alt="" />
              <img className='profile-user-image' src={`${PF}profile/2.jpeg`} alt="" />
            </div>
            <div className="profile-info">
              <h4 className='profile-info-name'>Bobson Dugnutt</h4>
              <span className='profile-info-description'>This be Bobson</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile