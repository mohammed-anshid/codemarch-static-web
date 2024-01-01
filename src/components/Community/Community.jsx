/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Community.css';
import ScrollReveal from 'scrollreveal';
import { FaArrowRight } from 'react-icons/fa';
import { PiDotOutlineFill } from 'react-icons/pi'

function Community() {

    useEffect(() => {
        // Initialize ScrollReveal with your desired configuration
        ScrollReveal().reveal('.container', {
          delay: 100,
          distance: '11px',
          duration: 1000,
          easing: 'ease-in',
          origin: 'bottom',
        });
    
        // Clean up ScrollReveal when the component unmounts
        return () => {
          ScrollReveal().destroy();
        };
    }, []); 
  return (
    <div className="container px-[1.5rem] md:px-[4rem] lg:px-[8.5rem]  mx-auto mb-11 pt-16 md:pt-28">
        <div className="w-full rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.5px]">
            <div className="backGround flex h-full w-full rounded-[16px] items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#3D8361] via-[#002b23] to-[#002b23]">
                <div className="community">
                    <div className="textContent mt-5 md:mt-9 lg:mt-14 text-center lg:mx-36">
                        <h1 className='head text-4xl md:text-5xl lg:text-6xl text-secondaryHover'>
                            Connect. Code. Conquer.
                        </h1>
                    </div>    
                    <div class="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 p-5 md:p-10 md:pt-15 lg:pt-16">
                        {/* Discord Card */}
                        <div class="block p-0 md:p-4 mt-5 md:mt-0">
                            <div className='vertical'>
                                <div className='md:mx-10 lg:mx-16'>
                                    <div className="grid grid-cols-10 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-1">
                                        <span className="inline-block rounded-lg col-span-3 sm:col-span-3 md:col-span-10 lg:col-span-10">
                                            <div className="inline-flex align-middle justify-center items-center select-none text-white mt-2 md:mt-0">
                                                <img className="h-14 md:h-20" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Discord_xn9tuy.svg" alt="Discord-logo" />
                                            </div>
                                        </span>
                                        <div className="col-span-7 sm:col-span-7 md:col-span-10 lg:col-span-10">
                                            <h2 className="lg:mt-4 md:mt-7 head text-[1.3rem] md:text-3xl md:text-[3rem] lg:text-5xl leading-[35px] md:leading-[50px] text-secondaryHover">codemarch community</h2>
                                            <p className="leading-7 md:leading-7 lg:leading-10 mt-3 md:mt-5 lg:mt-5 lg:mx-[3.9px] sm:mt-1 block text-[11px] md:text-base text-secondaryText">
                                                Join our active Discord community for coding discussions, expert help, and exclusive events. Connect with fellow learners, participate in challenges, and grow in a supportive network.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='hidden  md:block'>
                                        <p className='gradient-underline mt-2 md:mt-6 lg:mt-6 font-bold leading-[55px] text-secondaryHover text-3xl md:text-4xl lg:text-4xl'>2,000+ Members</p>
                                        <div className='mt-8'>
                                            <a href="https://discord.gg/7g9WddcyKt" className='cursor-pointer'>
                                                <img className='h-10 md:h-11 lg:h-14' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059414/Discord-button_rkohcu.svg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='block md:hidden lg:hidden'>
                                        <button onClick={()=>window.location.href='https://discord.gg/7g9WddcyKt'} className="btn secondaryButton flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[2.7rem] justify-center rounded-[6px]">
                                            Join Community<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium'>2,000+ Members</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Twitter Card */}
                        <hr  className='gradient-hr mt-7 sm:block md:hidden '/>
                        <div class="block rounded-xl p-0 md:p-4 mt-5 md:mt-0">
                            <div className=''>
                                <div className='lg:mx-16 md:mx-10'>
                                    <div className="grid grid-cols-10 sm:grid-cols-10 md:grid-cols-1 lg:grid-cols-1">
                                        <span className="inline-block rounded-lg col-span-3 sm:col-span-3 md:col-span-10 lg:col-span-10">
                                            <div className="inline-flex align-middle justify-center items-center select-none text-white mt-2 md:mt-0">
                                                <img className='h-14 md:h-20' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Twitter_e4irlx.svg" alt="Twitter-logo" />
                                            </div>
                                        </span>
                                        <div className="col-span-7 sm:col-span-7 md:col-span-10 lg:col-span-10">
                                            <h2 className="lg:mt-4 md:mt-7 head text-[1.3rem] md:text-3xl md:text-[3rem]  lg:text-5xl leading-[35px] md:leading-[50px] text-secondaryHover pr-0 lg:pr-40">codemarch on Twitter</h2>
                                            <p className="leading-7 md:leading-7 lg:leading-10 mt-3 md:mt-5 lg:mt-5 lg:mx-[3.9px] sm:mt-1 block text-[11px] md:text-base text-secondaryText">
                                                Follow us on twitter for industry news, success stories, and real-time communication with our team. Engage with our tweets for discussions on technology, innovation, and learning.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='hidden  md:block'>
                                        <p className='gradient-underline mt-2 md:mt-6 lg:mt-6 font-bold leading-[55px] text-secondaryHover text-3xl md:text-4xl lg:text-4xl'>60,000+ Followers</p>
                                        <div className='mt-8'>
                                            <a href="https://twitter.com/codemarch" className='cursor-pointer'>
                                                <img className='h-10 md:h-11 lg:h-14' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059414/Twitter-button_zfn2v9.svg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='block md:hidden lg:hidden'>
                                        <button onClick={()=>window.location.href='https://twitter.com/codemarch'} className="btn text-[12.3px] flex items-center mt-6 font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-[2.3rem] md:h-[2.7rem] justify-center rounded-[6px]">
                                            View on Twitter<span className="ml-1 text-xs"><FaArrowRight/></span><PiDotOutlineFill/><span className='font-medium'>60,000+ Followers</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="community-media card flex mx-5 md:mx-10 lg:mx-28 relative">
                        <img className="mx-auto card img-shadow  md:h-full" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689064786/codemarch-discord_1_yxe83o.svg" alt="Community" />
                        <img className="absolute h-[90%] sm:h-[98%] top-[0.85rem] sm:top-[.3rem] md:top-[.4rem] lg:top-2 left-[5rem] sm:left-[11rem] md:left-[15rem] lg:left-[22rem]" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689079507/twt_1_fjl5si.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community