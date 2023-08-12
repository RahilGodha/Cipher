import React from 'react';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';

const ProfileDiv = ({user}) => {
  // console.log(user)
  return (
    <div className='relative rounded-lg h-full border p-4'>
      {/* First Div */}
      <div className={`${user ? '' : 'hidden'} flex mb-4 mt-4`}>
        <div className='w-full flex space-x-5 justify-around'>
          <div className=' font-semibold flex flex-col items-center'>
            <span>27k</span><span>followers</span>
          </div>
          <div className=' font-semibold flex flex-col items-center'>
            <span>76</span><span>following</span>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className={`font-bold text-lg mb-2 flex justify-center`}><p>{user ? 'UserName' : 'No User'}</p></div>

      {/* Third Div */}
      <div className='text-gray-600 text-center'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Button */}
      <button
        className=' absolute left-[30%] shadow-2xl bg-orange-600  text-white px-4 py-2 rounded-full flex items-center mx-auto mt-4'
      >
        <ScheduleSendOutlinedIcon className='mr-2' />
        {user ? 'Post' : 'Login'}
      </button>
    </div>
  );
};

export default ProfileDiv;
