import './rightbar.css'

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
        <li className="rightbar-friend">
          <div className="rightbar-profile-image-container">
            <img src="assets/profile/2.jpeg" alt="" className="rightbar-profile-image" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-username">Jeromy Gride</span>
        </li>
        <li className="rightbar-friend">
          <div className="rightbar-profile-image-container">
            <img src="assets/profile/2.jpeg" alt="" className="rightbar-profile-image" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-username">Jeromy Gride</span>
        </li>
        <li className="rightbar-friend">
          <div className="rightbar-profile-image-container">
            <img src="assets/profile/2.jpeg" alt="" className="rightbar-profile-image" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-username">Jeromy Gride</span>
        </li>
      </ul>
    </div>
  )
}

export default Rightbar