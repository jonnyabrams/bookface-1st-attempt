import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
// import CancelIcon from '@mui/icons-material/Cancel'

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img className='share-profile-image' src="/assets/profile/1.webp" alt="" />
          <input placeholder='Say something...' className='share-input' />
        </div>
        <hr className='share-hr' />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMediaIcon htmlColor='tomato' className='share-icon' />
              <span className='share-option-text'>Photo or Video</span>
            </div>
            <div className="share-option">
              <LabelIcon htmlColor='blue' className='share-icon' />
              <span className='share-option-text'>Tag</span>
            </div>
            <div className="share-option">
              <RoomIcon htmlColor='green' className='share-icon' />
              <span className='share-option-text'>Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotionsIcon htmlColor='gold' className='share-icon' />
              <span className='share-option-text'>Feelings</span>
            </div>
          </div>
          <button className="share-button">
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default Share