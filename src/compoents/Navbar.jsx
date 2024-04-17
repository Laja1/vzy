import React, { useState } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleClicked = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className='flex   items-center justify-center pt-5'>
      <div className='md:hidden fixed pt-20 lg:flex hidden'>
        <div className='flex-row bg-transparent backdrop-filter backdrop-blur-lg z-30  flex items-center shadow-xl justify-between border-[0.5px] border-[#99999930] p-3 w-[1070px] h-[57px] rounded-lg'>
          <img src='vyz.svg' alt='logo' />
          <div className='text-white items-center flex-row flex gap-5'>
            <p>Pricing</p>
            <p>Showcase</p>
            <p>Login</p>
            <div>
              <div className='bg-[#fff] py-1 rounded-lg px-2'>
                <p className='text-black'>Get Vzy free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='block lg:hidden'>
          <div className={showNavbar ? 'bg-[#111] w-screen h-screen top-0 left-0' : 'top-0 left-0'}>
          <div className='p-3   w-[350px]  flex justify-between items-center '>
            <div className='flex-row flex bg-transparent backdrop-filter fixed backdrop-blur-lg z-30   mx-auto items-center border-2 border-[#99999930] rounded-lg md:w-[700px]'>
            
              <div className='flex-col flex '>
                <img src='vyz.svg' alt='logo' />
                </div>
                <div>
              <button onClick={handleClicked}>
                {showNavbar ? (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='#fff' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='#fff' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 9h16.5m-16.5 6.75h16.5' />
                  </svg>
                )}
              </button></div>
            </div></div>
          {showNavbar && <p className='text-white'>ekrtrwjjidsnjn</p>}
        </div>
      </div>
    </div>
  );
}
