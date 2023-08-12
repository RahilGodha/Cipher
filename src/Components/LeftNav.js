import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LeftNav = () => {
  return (
    <div className='h-full w-[200px] flex flex-col justify-between items-start p-4'>
      <NavLink
        to='/community'
        className='text-gray-600 text-xl font-semibold hover:text-orange-500'
        activeClassName='text-orange-500'
      >
        <HomeIcon className='mr-2' />
        Home
      </NavLink>
      <NavLink
        to='/community'
        className='text-gray-600 text-xl font-semibold hover:text-orange-500'
        activeClassName='text-orange-500'
      >
        <PeopleIcon className='mr-2' />
        Community
      </NavLink>
      <NavLink
        to='/community'
        className='text-gray-600 text-xl font-semibold hover:text-orange-500'
        activeClassName='text-orange-500'
      >
        <SearchIcon className='mr-2' />
        Search
      </NavLink>
      <NavLink
        to='/community'
        className='text-gray-600 text-xl font-semibold hover:text-orange-500'
        activeClassName='text-orange-500'
      >
        <BookIcon className='mr-2' />
        Course
      </NavLink>
      {/* <NavLink
        to='/profile'
        className='text-gray-600 hover:text-orange-500 mt-auto'
        activeClassName='text-orange-500'
      >
        <AccountCircleIcon className='mr-2' />
        Profile
      </NavLink> */}
    </div>
  );
};

export default LeftNav;
