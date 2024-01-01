import React from 'react';
import './MyCourses.css';
import { FaArrowRight } from 'react-icons/fa';

const MyCourses = () => {
  return (
    <>
        <div className="main px-4 sm:pt-3 md:pt-5">
            <div className="flex justify-between border-b pb-8 md:pb-9 lg:pb-10">
                <div className='self-end text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold head text-secondaryHover'>
                    <h3>My Courses</h3>
                </div>
                <div className='self-end'>
                    <button className="btn px-8 sm:px-10 md:px-12 lg:px-16 lg:py-6 flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[2.7rem] justify-center rounded-[6px]">
                        Explore<span className="ml-1 text-xs"><FaArrowRight/></span>
                    </button>
                </div>
            </div>
            <div className='head-tag  text-secondaryText sm:text-lg md:text-xl capitalize pt-7 md:pt-8 lg:pt-10 font-medium tracking-wide'>
                <h5>CONTINUE LEARNING</h5>
            </div>

            <div className='w-full pt-9'>
                <div className="flex flex-col h-screen">
                    <div className="codecamp-card flex gap-x-1 sm:gap-x-6 md:gap-x-7 lg:gap-x-14">
                        <div>
                            <div className='card-img w-[10.2rem] h-[6rem] sm:w-[15.1rem] sm:h-[9rem] md:w-[17rem] md:h-[9.7rem] lg:w-[20rem] lg:h-[11.5rem]'>
                                <img className='h-full w-full object-cover rounded-xl' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1697711108/b9eMGE7QtTk-MQ_ycmtle.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card-datas block w-full self-center space-y-5">
                            <div className="title-card flex justify-between w-full">
                                <div className='course-title w-full text-center md:text-start text-secondaryText text-[10px] sm:text-xl md:text-2xl lg:text-3xl capitalize  md:mt-8 lg:mt-10 font-semibold tracking-wide whitespace-nowrap'>
                                    <h5>HTML5 & CSS3 Essentials</h5>
                                </div>
                                <div className='hidden md:block'>
                                    <button className="resume-btn btn md:px-8 lg:px-10 flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[2.7rem] justify-center rounded-[6px]">
                                        Resume<span className="ml-1 text-xs"><FaArrowRight/></span>
                                    </button>
                                </div>
                            </div>
                            <div className="progress-card flex gap-5 ">
                               
                                <div className="relative w-full hidden md:block self-center bg-[#3D8361] rounded-full h-2 dark:bg-gray-700">
                                    <div
                                        className="absolute top-0 left-0 bg-gradient-to-t from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] h-2 rounded-full"
                                        style={{ width: `45%` }}
                                    > 
                                    </div>
                                </div>
                                <div className="flex self-center hidden md:block justify-between mb-1 whitespace-nowrap">
                                    <span className="progress-text text-lg font-light text-secondaryText dark:text-white">45% Complete</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* mobile-view */}
                    <div className='md:hidden'>
                        <button className="resume-btn btn  md:px-8 lg:px-10 flex items-center mt-5 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.4rem] sm:h-[2.7rem] justify-center rounded-[6px]">
                            Resume<span className="ml-1 text-xs"><FaArrowRight/></span>
                            
                        </button>
                        <div className="relative w-full self-center bg-[#3D8361] top-[-4.1px] rounded-b-full h-1 dark:bg-gray-700">
                            <div
                                className="absolute top-0 left-0 bg-gradient-to-t from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] h-1 rounded-b-full"
                                style={{ width: `45%` }}
                            > 
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default MyCourses