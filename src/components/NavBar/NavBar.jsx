/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './NavBar.css'
import logo from '../../assets/cm-logo-1 1.svg';
import Button from '../../assets/Property 1=Component 2.svg';
import { FaArrowRight } from 'react-icons/fa';

function NavBar() {
//   const [state, setState] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 19) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
        
        { navbar ?(
            <nav className='fixed z-20 rounded-[15px] lg:pl-10 px-2 py-2 border mt-10 border-[#EAEDDC] left-1/2 -translate-x-1/2 border-opacity-40 bg-[#002B23] navbar'>
                <div className='flex justify-between items-center sm:gap-7 md:gap-16 w-[20rem] md:w-[30rem] lg:w-[36rem]'>
                    <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">Skills</a>
                    <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">Newsletter</a>
                    <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">Community</a>
                    <a href="" className="md:inline sm:inline xm:inline lg:hidden xl:hidden">
                        <img src={logo} className="h-6 md:h-8 lg:h-8" alt=""/>
                    </a> 
                    <button className="btn flex items-center font-medium text-secondaryHover bg-[#3D836166] w-28 h-9 justify-center rounded-[6px]">
                        Sign up<span className="ml-1 text-xs"><FaArrowRight/></span>
                    </button>
                </div>
            </nav>

            ):(
            // Main Navigation Bar
            <nav className="fixed bg-transparent w-full z-20 top-0 left-0 lg:pt-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[1.5rem]">
                    <a href="" className="flex items-center">
                        <img src={logo} className="h-6 md:h-8 mr-3" alt="Flowbite Logo"/>
                    </a>
                    <div className="flex md:order-2">
                        <button className="hidden sm:hidden xs:hidden lg:inline-block md:inline-block">
                            <img className="w-36" src={Button} alt="" />
                        </button>
                        <button className="btn inline-flex md:hidden items-center font-medium text-secondaryHover  bg-gradient-to-b from-[#011F1A] via-[#011F1A] to-[#01322937] border-[#EAEDDC66] border-[1px] w-28 h-[2.3rem] md:w-36 md:h-[2.7rem] justify-center rounded-[6px]">
                            Sign up<span className="ml-1 text-xs"><FaArrowRight/></span>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-20 md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Newsletter</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className={`${state ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="top-0 right-0 w-[190px] bg-[#082d26] text-white fixed h-full">
                        <button onClick={()=>setState(!state)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close menu</span>
                        </button>    
                        //Mobile navigation links// 
                        <div class="py-4 overflow-y-auto mt-4">
                            <ul class="space-y-2 font-medium text-center">
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Newsletter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Community</span>
                                    </a>
                                </li>
                                <li>
                                    <button className="">
                                        <img className="w-[152px]" src={Button} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </nav>
            )
        }
    </>
  )
}

export default NavBar