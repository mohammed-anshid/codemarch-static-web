import React from 'react';
import './Banner.css';
import BannerImg from '../../assets/Banner/Codecamp-Banner.svg';
import { FaArrowRight } from 'react-icons/fa';


const Banner = () => {
  return (
    <>
        <div className="pt-24 md:pt-44 lg:pb-16 px-9 md:px-16">
            <div className="max-w-screen-xl flex flex-wrap rounded-[16px]  items-center justify-between mx-auto p-3">
                <div className="banner-header w-full">
                    <div className="content mx-0 md:mx-3 text-center justify-center">
                        <h4 className="text-6xl hidden md:block lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">Live Coding Bootcamps</h4>
                        <h4 className="text-6xl md:hidden lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">
                            <span>Live</span><br />
                            <span>Coding</span><br />
                            <span>Bootcamps</span>
                        </h4>
                        <p className="text-sm sm:text-xl text-secondaryHover my-7">Master coding, build your brand & land your dream job.</p>
                        <button className="btn flex mx-auto items-center text-center font-bold text-[#01221C] md:text-[1.3rem] bg-gradient-to-b from-brandText to-brandHover w-full md:w-56 h-10 md:h-14 justify-center mt-6 md:mt-9 lg:mt-10 rounded-[9px]">
                            Get Started<span className="ml-1 md:ml-[4px] text-xs md:text-[1.1rem]"><FaArrowRight/></span>
                        </button>

                    </div>
                </div>

                <div className="faded faded-top faded-bottom faded-left bg-gradient-to-r shadow-inner  from-transparent via-[#002b23] to-transparent mt-10">
                    <img src={BannerImg} alt="" className="fade-image " />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner