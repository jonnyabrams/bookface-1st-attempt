import './topbar.css'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to='/' style={{ textDecoration:"none" }}>
          <span className="logo">Bookface</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <SearchIcon className='search-icon' />
          <input placeholder='Search...' className='search-input' />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <PersonIcon />
            <span className="topbar-icon-badge">
              1
            </span>
          </div>
          <div className="topbar-icon-item">
            <ChatIcon />
            <span className="topbar-icon-badge">
              2
            </span>
          </div>
          <div className="topbar-icon-item">
            <NotificationsIcon />
            <span className="topbar-icon-badge">
              1
            </span>
          </div>
        </div>
        <img src="/assets/profile/1.webp" alt="" className="topbar-image" />
      </div>
    </div>
  )
}

export default Topbar