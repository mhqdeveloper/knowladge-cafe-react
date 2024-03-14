import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className='text-lg bg-white rounded-md p-2 my-4'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
    // handleMarkAsReadTime: PropTypes.func
};

export default Bookmark;