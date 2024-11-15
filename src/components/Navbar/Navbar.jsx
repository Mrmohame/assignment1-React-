import React from 'react'
// import { NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'






export default function Navbar() {
  return (
  

<nav class="bg-[#2c3e50] border-gray-200 dark:bg-gray-900 text-white font-bold fixed top-0 left-0 right-0 py-2 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="" class="flex items-center space-x-3 rtl:space-x-reverse">
    <h1 className='minism:text-[1.6rem] md:text-[2rem]  uppercase '>Start Framework</h1>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">

        {/* <li>
          <NavLink href="#" class="block py-2 px-3 text-gray-900 ">About</NavLink>
        </li>
        <li>
          <NavLink href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</NavLink>
        </li>
        <li>
          <NavLink href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</NavLink>
        </li> */}
   
   <li className='md:px-3 py-1 text-[1.3rem]'>
                <NavLink to="About">ABOUT</NavLink>
            </li>
            <li className='md:px-3 py-1 text-[1.3rem]'>
                <NavLink to="Portfolio">PORTFOLIO</NavLink>
            </li>
            <li className='md:px-3 py-1 text-[1.3rem]'>
                <NavLink to="Contact">CONTACT</NavLink>
            </li>

      </ul>
    </div>
  </div>
</nav>

  );
}
















// export default function Navbar() {

//   return (


//   )

  
// }

{/* <div className='bg-[#2c3e50] py-6 text-white font-bold fixed top-0 left-0 right-0 mb-10 z-50' id='xl'>
<div className='flex flex-wrap justify-between items-center w-[85%] mx-auto '>
        <div>
<h1 className='text-[2rem]  uppercase'>Start Framework</h1>
        </div>
    <div>
    <ul className='flex flex-wrap '>
            <li className='px-3 text-[1.3rem]'>
                <NavLink to="About">ABOUT</NavLink>
            </li>
            <li className='px-3 text-[1.3rem]'>
                <NavLink to="Portfolio">PORTFOLIO</NavLink>
            </li>
            <li className='px-3 text-[1.3rem]'>
                <NavLink to="Contact">CONTACT</NavLink>
            </li>
        </ul>
    </div>
    </div>
</div> */}
