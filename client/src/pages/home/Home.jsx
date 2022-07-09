import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home-container">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home