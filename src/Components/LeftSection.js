import React from 'react';
import ProfileDiv from './ProfileDiv';
import LeftNav from './LeftNav';
import Left3 from './left3';
import '../styles/main.css'

const LeftSection = () => {
  // Fetch user details from local storage
  // const user = JSON.parse(localStorage.getItem('user'));
 const user = {rahi:"rahil"}
  return (
    <div className='flex flex-col justify-around w-full h-full'>
      <div className='bg-white rounded-lg h-[25vh] shadow-2xl mx-2'>
        {/* Pass user details to ProfileDiv component */}
        <ProfileDiv user={user} />
      </div>
      <div className='bg-white p-4 rounded-lg h-[25vh] shadow-2xl mx-2'>
        <LeftNav />
      </div>
      <div className='bg-white p-4 rounded-lg h-[30vh] shadow-2xl mx-2 overflow-auto no_scrollbar'><Left3/></div>
    </div>
  );
};

export default LeftSection;
