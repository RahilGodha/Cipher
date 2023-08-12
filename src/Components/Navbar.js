import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className='h-[60%] my-auto w-[98%] mx-auto bg-white rounded-full flex justify-between items-center p-4 '>
      <NavLink link='/home' text='Home' icon={<HomeIcon />} />
      <NavLink link='/community' text='Community' icon={<GroupIcon />} />
      <NavLink link='/search' text='Search' icon={<SearchIcon />} />
      <NavLink link='/courses' text='Courses' icon={<BookIcon />} />
      <NavLink link='/profile' text='Profile' icon={<AccountCircleIcon />} />
    </div>
  );
};

const NavLink = ({ link, text, icon }) => {
  return (
    <a href={link} className='flex flex-col items-center space-x-2 text-gray-600 hover:text-gray-800'>
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Navbar;
