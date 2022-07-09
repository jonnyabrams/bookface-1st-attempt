import './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='leftbar-wrapper'>
        <ul className='leftbar-list'>
          <li className="leftbar-list-item">
            <RssFeedIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Feed</span>
          </li>
          <li className="leftbar-list-item">
            <ChatIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Chats</span>
          </li>
          <li className="leftbar-list-item">
            <PlayCircleFilledIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Videos</span>
          </li>
          <li className="leftbar-list-item">
            <GroupIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Groups</span>
          </li>
          <li className="leftbar-list-item">
            <BookmarkIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Bookmarks</span>
          </li>
          <li className="leftbar-list-item">
            <HelpOutlineIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Questions</span>
          </li>
          <li className="leftbar-list-item">
            <WorkOutlineIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Jobs</span>
          </li>
          <li className="leftbar-list-item">
            <EventIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Events</span>
          </li>
          <li className="leftbar-list-item">
            <SchoolIcon className='leftbar-icon' />
            <span className="leftbar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="leftbar-button">Show more</button>
        <hr className='leftbar-hr' />
        <ul className="leftbar-friend-list">
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/1.webp" alt="" />
            <span className="leftbar-friend-name">Dwigt Rortugal</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/2.jpeg" alt="" />
            <span className="leftbar-friend-name">Bobson Dugnutt</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/3.webp" alt="" />
            <span className="leftbar-friend-name">Todd Bonzalez</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/1.webp" alt="" />
            <span className="leftbar-friend-name">Dwigt Rortugal</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/2.jpeg" alt="" />
            <span className="leftbar-friend-name">Bobson Dugnutt</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/3.webp" alt="" />
            <span className="leftbar-friend-name">Todd Bonzalez</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/1.webp" alt="" />
            <span className="leftbar-friend-name">Dwigt Rortugal</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/2.jpeg" alt="" />
            <span className="leftbar-friend-name">Bobson Dugnutt</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/3.webp" alt="" />
            <span className="leftbar-friend-name">Todd Bonzalez</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/1.webp" alt="" />
            <span className="leftbar-friend-name">Dwigt Rortugal</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/2.jpeg" alt="" />
            <span className="leftbar-friend-name">Bobson Dugnutt</span>
          </li>
          <li className="leftbar-friend">
            <img className='leftbar-friend-image' src="/assets/profile/3.webp" alt="" />
            <span className="leftbar-friend-name">Todd Bonzalez</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar