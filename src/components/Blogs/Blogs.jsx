import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleBookmarksFromBlog, handleMarkAsReadTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(setBlogs(data)))
    }, [])

    return (
        <div className="w-2/3">
            <h2 className="text-lg">Total Blogs: {blogs.length}</h2>

            { blogs.map(blog => <Blog 
                    key={blog.id}
                     blog={blog}
                     handleBookmarksFromBlog={handleBookmarksFromBlog}
                     handleMarkAsReadTime={handleMarkAsReadTime}> 
                     </Blog>) }
        </div>
    );
};
Blogs.propTypes = {
    blogs: PropTypes.object.isRequired,
    handleBookmarksFromBlog: PropTypes.func.isRequired,
    handleMarkAsReadTime: PropTypes.func.isRequired
}

export default Blogs;