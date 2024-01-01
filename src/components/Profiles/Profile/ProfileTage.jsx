/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './profileTag.css';
import avatarDefault from '../../../assets/images/default-avatar.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const ProfileTage = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];  
  const profile = ''  
  return (
    <>
        <div className="pt-48 lg:pb-6 px-7 md:px-16 lg:px-32">
            <div className="max-w-screen-xl flex flex-wrap rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] items-center justify-between mx-auto pl-[2px] p-[1.5px]">
                <div class="flex h-full w-full rounded-[16px] bg-[#002b23]  bg-gradient-to-t from-[#001e18] to-transparent">
                    <div className="tage p-6 w-full">
                        <div className="profileTag grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-3 md:gap-0">
                            <div className="section-1 w-full">
                                <div className='avatar-section flex gap-2 sm:gap-5 sm:justify-center  md:justify-center lg:justify-normal'>
                                    <img class="profileTag-avatar w-14 h-14 md:w-24 md:h-24 rounded-xl" src={ profile ? profile : avatarDefault } alt="Default avatar"/>
                                    <div className='avatar-content self-center space-y-2 flex lg:block space-x-3 sm:space-x-16 md:space-x-24 lg:space-x-0'>
                                        <div className='avatar-name text-2xl sm:text-5xl md:text-5xl head font-semibold text-secondaryHover'>
                                            <h2>Hello Junaid!</h2>
                                        </div>
                                        <div className='avatar-btn flex underline text-secondaryText text-xs sm:text-lg font-medium self-center sm:self-end'>
                                            <a href=''>View Profile</a>
                                            <span className='self-center text-lg sm:text-3xl'><BsArrowRightShort/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-2 flex gap-2 sm:gap-4 sm:justify-center lg:justify-end">
                                <div className='py-3 sm:self-center  sm:border-r border-secondaryHover'>
                                    <div className="streak-head border-r sm:border-none font-normal lg:font-medium pr-3 md:pr-9 lg:pr-8 text-secondaryText text-base sm:text-xl lg:text-2xl block md:flex gap-1 md:justify-center lg:justify-normal">
                                        <span className="block sm:inline-block">Daily</span> 
                                        <span className="block sm:inline-block sm:ml-1">Streak</span>
                                    </div>
                                </div>
                                <div className='streak py-3 px-3 self-center'>
                                    <ul className='flex gap-[15px] sm:gap-7 md:gap-6  text-center'>
                                        {days.map((day, index) => (
                                            <li key={index} >
                                                <FaCheckCircle className='streak-icons text-base sm:text-2xl md:text-3xl mb-2 text-[#3D836166]' />
                                                <span className='text-secondaryText'>{day}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default ProfileTage