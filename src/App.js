import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';
import Main from './Components/Main';

const App = () => {
  return (
    <div className=''>
      <Router>
        <div className='fixed top-0 h-[8vh] w-full flex'><Header /></div>
        <div className='flex w-full'>
          {/* LEFT SECTION */}
          <div className='hidden md:block mt-[8vh] w-[35vw] lg:w-[20vw] h-[90.5vh] rounded-xl'><LeftSection /></div>

          {/* Main and RightSection sections */}
          <div className='mt-[8.3vh] h-[82vh] md:h-[91vh] overflow-auto m-1 w-full md:w-[65vw] lg:w-[55vw]'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/community" element={<Main />} />
              <Route path="/search" element={<RightSection />} />
            </Routes>
          </div>

          {/* RIGHT SECTION */}
          <div className='hidden lg:block mt-[8vh] h-[92vh] w-[25vw] bg-white'><RightSection /></div>
        </div>
      </Router>

      <div className='fixed md:hidden bottom-0 h-24 w-full flex '><Navbar /></div>
    </div>
  );
};

export default App;
