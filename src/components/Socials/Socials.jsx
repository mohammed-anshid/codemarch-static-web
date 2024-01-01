import React from 'react';
import './socials.css';
import { FaArrowRight } from 'react-icons/fa';
import { PiDotOutlineFill } from 'react-icons/pi';

const Socials = () => {
  return (
    <>
        <div className="pt-24 md:pt-10 lg:pb-16 px-3 md:px-16">
            <div className="max-w-screen-xl flex flex-wrap rounded-[16px]  items-center justify-between mx-auto p-3">
                <div className="banner-header w-full">
                    <div className="content mx-0 md:mx-3 text-center justify-center">
                        <h4 className="text-6xl hidden md:block lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">Transforming Careers Everywhere</h4>
                        <h4 className="text-5xl lg:text-6xl md:hidden lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">
                            <span>Transforming</span><br />
                            <span>Careers</span><br />
                            <span>Everywhere</span>
                        </h4>
                        <p className="text-sm sm:text-xl hidden md:block lg:block text-secondaryHover my-7 custom-line-height">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            <br className="hidden sm:block md:hidden lg:block"/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
                <div className="bootcamp-socials w-full">
                    <div class="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-20 p-2 md:p-10 md:pt-15 lg:pt-16">
                        <div class="block p-0 md:p-2 mt-5 md:mt-0">
                            <div className='h-full'>
                                <div className='mx-4'>
                                    <div className="grid grid-cols-10 sm:grid-cols-10 space-x-9">
                                        <span className="inline-block rounded-lg col-span-2 sm:col-span-2 justify-self-center">
                                            <div className="inline-flex align-middle justify-center items-center select-none text-white md:mt-3">
                                                <img className="h-[5rem]" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Discord_xn9tuy.svg" alt="Discord-logo" />
                                            </div>
                                        </span>
                                        <div className="col-span-8">
                                            <h2 className=" head text-[1.3rem] md:text-3xl md:text-[3rem] lg:text-[2.6rem] leading-[35px] md:leading-[50px] text-secondaryHover lg:whitespace-nowrap">codemarch community</h2>
                                            <p className="leading-5 lg:leading-10 mt-2 lg:mt-8  lg:mx-[3.9px] sm:mt-1 block text-[11px] md:text-base text-secondaryText">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <div className='social-buttons mx-1 hidden lg:block'>
                                                <button className="btn secondaryButton flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[3.2rem] justify-center rounded-[6px]">
                                                    Join Community<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium'>2,000+ Members</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div> 
                                    <button className="btn lg:hidden secondaryButton flex items-center mt-6 font-semibold sm:mx-5 bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full text-sm md:text-[16px] h-[2.3rem] md:h-[3.2rem] justify-center rounded-[6px]">
                                        Join Community<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium text-sm lg:text-base'>2,000+ Members</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr  className='gradient-hr sm:block md:hidden '/>
                        <div class="block p-0 md:p-2 md:mt-0">
                            <div className='h-full'>
                                <div className='mx-4'>
                                    <div className="grid grid-cols-10 sm:grid-cols-10 space-x-9">
                                        <span className="inline-block rounded-lg col-span-2 sm:col-span-2 justify-self-center">
                                            <div className="inline-flex align-middle justify-center items-center select-none text-white md:mt-3">
                                                <img className="h-[5rem]" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Twitter_e4irlx.svg" alt="Discord-logo" />
                                            </div>
                                        </span>
                                        <div className="col-span-8">
                                            <h2 className=" head text-[1.3rem] md:text-3xl md:text-[3rem] lg:text-[2.6rem] leading-[35px] md:leading-[50px] text-secondaryHover lg:whitespace-nowrap">codemarch community</h2>
                                            <p className="leading-5 lg:leading-10 mt-2 lg:mt-8  lg:mx-[3.9px] sm:mt-1 block text-[11px] md:text-base text-secondaryText">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <div className='social-buttons mx-1 hidden lg:block'>
                                                <button className="btn secondaryButton flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[3.2rem] justify-center rounded-[6px]">
                                                    View on Twitter<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium'>60,000+ Followers</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div> 
                                    <button className="btn lg:hidden secondaryButton flex items-center mt-6 font-semibold sm:mx-5 bg-gradient-to-b  from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full text-sm md:text-[16px] h-[2.3rem] md:h-[3.2rem] justify-center rounded-[6px]">
                                        View on Twitter<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium text-sm lg:text-base'>60,000+ Followers</span>
                                    </button>
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

export default Socials