import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div >
            <div className='w-[80%] mx-auto flex justify-between'>
                <h2 className='text-3xl font-semibold font-serif'>Knowledge Cafe</h2>
                <img src={Profile} alt="" />
            </div>
        </div>
    );
};

export default Header;