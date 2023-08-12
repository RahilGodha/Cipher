import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import LogoImg from '../Assets/Images/7.jpg';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header = () => {
  const count = 0;
  const user = localStorage.getItem('user'); // Get user from local storage
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to /profile on click
  };

  return (
    <div className='h-[98%] my-auto w-[100%] bg-white flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <img src={LogoImg} alt="Logo" className='h-16' />
        <h1 className='font-bold text-2xl mb-2'>Pluton</h1>
      </div>
      <div className='hidden md:block font-bold text-2xl font-serif'> Community Posts</div>
      <div className='flex'>
        <div className='relative flex mr-5 items-center'>
          <NotificationsNoneOutlinedIcon />
          {/* <div className=' bg-red-400 h-5 w-5 rounded-full flex justify-center text-white absolute right-7 bottom-9'>
            {count} */}
          {/* </div> */}
        </div>


        {!user && (
          <div
            className='hidden md:flex bg-blue-400 h-10 w-10 rounded-full justify-center items-center cursor-pointer'
            onClick={handleProfileClick}
          >
            {/* <img
                        src={user.profileImage} // Assuming user has a profileImage property
                        alt="Profile"
                        className='h-8 w-8 rounded-full'
                    /> */}
            <div className='h-10 w-10 bg-black rounded-full'></div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Header;
