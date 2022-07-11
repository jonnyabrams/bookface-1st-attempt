import './rightbar.css'
import { Users } from "../../dummyData"
import Online from '../online/Online'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img className='birthday-image' src="assets/gift.png" alt="" />
          <span className="birthday-text"><b>Todd Bonzalez</b> and <b>3 other friends</b> have their birthday today</span>
        </div>
      </div>
      <img src="assets/ad.jpeg" alt="" className="rightbar-ad" />
      <h4 className="rightbar-title">Online friends</h4>
      <ul className="rightbar-friend-list">
        {Users.map((u) =>(
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </div>
  )
}

export default Rightbar