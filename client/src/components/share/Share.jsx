import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import CancelIcon from '@mui/icons-material/Cancel'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useRef } from 'react'
import axios from 'axios'

const Share = () => {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const description = useRef()
  const [file, setFile] = useState(null)

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      content: description.current.value
    }

    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append('name', fileName)
      data.append('file', file)
      newPost.img = fileName
      try {
        await axios.post('/upload', data)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      await axios.post('/post', newPost)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img className='share-profile-image' src={user.profilePicture ? PF + user.profilePicture : PF + 'default-profile.png'} alt="" />
          <input placeholder={`What's on your mind, ${capitalise(user.username)}?`} className='share-input' ref={description} />
        </div>
        <hr className='share-hr' />
        { file && (
          <div className="share-image-container">
            <img src={URL.createObjectURL(file)} className='share-image' alt="" />
            <CancelIcon className='share-cancel-image' onClick={() => setFile(null)} />
          </div>
        )}
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor='file' className="share-option">
              <PermMediaIcon htmlColor='tomato' className='share-icon' />
              <span className='share-option-text'>Photo or Video</span>
              <input style={{ display: 'none' }} type='file' id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
            </label>
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
          <button className="share-button" type="submit">Share</button>
        </form>
      </div>
    </div>
  )
}

export default Share