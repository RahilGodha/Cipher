import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CommunityCard = ({ logo, name, followers }) => {
  return (
    <div className='bg-white p-4 rounded shadow flex items-center justify-between mb-4'>
      <div className='flex items-center'>
        {/* <img src={logo} alt='Community Logo' className='w-12 h-12 rounded-full mr-3' /> */}
        <div className='h-10 w-10 bg-black rounded-full'></div>
        <div className='ml-4'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className='text-gray-500'>{followers} followers</p>
        </div>
      </div>
      <button className='text-black-500 hover:underline flex items-center'>
        <AddCircleOutlineIcon className='mr-1' />
        Join

      </button>
    </div>
  );
};
const RightSection = () => {
  const communities = [
    {
      logo: 'community1-logo.jpg',
      name: 'Community 1',
      followers: 1200,
    },
    {
      logo: 'community2-logo.jpg',
      name: 'Community 2',
      followers: 800,
    },
    {
      logo: 'community3-logo.jpg',
      name: 'Community 3',
      followers: 2300,
    },
    // Add more communities...
  ];
  return (
    <div className='flex flex-col space-y-4'>
      <div className='bg-white p-4 rounded '>
        {/* Search Bar */}
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-2 border border-gray-300 rounded-full'
        />
      </div>
      <div className='bg-white p-4 rounded'>
        <h2 className='text-xl font-semibold mb-2'>Joined Communities</h2>
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            logo={community.logo}
            name={community.name}
            followers={community.followers}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSection;
