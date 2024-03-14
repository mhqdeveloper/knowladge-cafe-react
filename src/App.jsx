import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTimeCount, setReadTimeCount] = useState(0)


  const handleBookmarksFromBlog = ( blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)

    
  }

  const handleMarkAsReadTime = (removeId, time) => {
    //set time Count Bookmarks
    setReadTimeCount(readTimeCount + time)
    //set remove process from Bookmarks
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== removeId))
  }
  return (
    <>
      <Header></Header>
      <div className='md: flex justify-between w-[80%] mx-auto space-x-6'>
        <Blogs handleBookmarksFromBlog={handleBookmarksFromBlog} handleMarkAsReadTime={handleMarkAsReadTime} readTimeCount={readTimeCount}></Blogs>
        <Bookmarks  bookmarks={bookmarks} readTimeCount={readTimeCount}></Bookmarks>
      </div>
    </>
  )
}

export default App
