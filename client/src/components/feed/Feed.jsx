import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('post/timeline/62c71599665c278f8a244bce')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed