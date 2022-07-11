import './rightbar.css'
import { Users } from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

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
          <span className="rightbar-info-value">London</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">London</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">Single</span>
        </div>
      </div>
      <h4 className='rightbar-title'>User friends</h4>
      <div className="rightbar-followings">
        <div className="rightbar-following">
          <img src="assets/profile/1.webp" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/profile/2.jpeg" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/profile/3.webp" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/profile/1.webp" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/profile/2.jpeg" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/profile/3.webp" alt="" className="rightbar-following-image" />
          <span className="rightbar-following-name">Rey McSriff</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        { profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar