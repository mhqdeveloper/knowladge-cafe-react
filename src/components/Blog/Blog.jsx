import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmarksFromBlog, handleMarkAsReadTime}) => {
    const {id, cover_img, author_img, author_name, publish_date, read_time, title, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover_img} alt={`this cover img ${cover_img}`} />
            <div>
                <div className='flex justify-between my-4'>
                <div className='flex gap-5'>
                    <img className='w-11 h-11 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{author_name}</h4>
                        <p>Publish: {publish_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <p>{read_time} min read </p> 
                    <button onClick={() => handleBookmarksFromBlog(blog)} className='text-green-500 text-2xl'><FaBookmark /></button>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-semibold my-5'>{title}</p>
                </div>
                <p className=' my-2'>
                    {
                        hashtags.map((hash, idx) => <span className='mx-2 text-blue-700 ' key={idx}><a href="">#{hash}</a></span>)
                    }
                </p>

                <button onClick={() => handleMarkAsReadTime(id, read_time)} className='text-purple-700 underline text-lg'>Mark As Read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksFromBlog: PropTypes.func.isRequired,
    handleMarkAsReadTime: PropTypes.func.isRequired
}

export default Blog;