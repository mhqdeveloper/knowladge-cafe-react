import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readTimeCount}) => {
    return (
        <div className="w-1/3 p-2 m-2 bg-gray-300 rounded-md">
            <div className="bg-purple-50 border border-purple-400 rounded-md items-center p-2 mb-6">
                <h2 className="text-2xl text-center">Reading Time Count : {readTimeCount}</h2>
            </div>
            <h2 className='text-2xl font-semibold text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
            
            {bookmarks.map((bookmarkId, idx)=>  <Bookmark key={idx} bookmark={bookmarkId}></Bookmark>)}
            
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readTimeCount: PropTypes.number
}
export default Bookmarks;