/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Community.css'

function Community() {
  return (
    <div class="px-[3rem] md:px-[4rem] lg:px-[8.5rem]  mx-auto mb-11 pt-28">
        <div class="w-full rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.5px]">
            <div class="backGround flex h-full w-full rounded-[16px] items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#3D8361] via-[#002b23] to-[#002b23]">
                <div className="community">
                    <div className="textContent mt-5 md:mt-9 lg:mt-14 text-center lg:mx-36">
                        <h1 className='head text-4xl md:text-5xl lg:text-6xl text-secondaryHover'>
                            Connect. Code. Conquer.
                        </h1>
                    </div>    
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10 md:pt-15 lg:pt-16">
                        <div class="block p-4">
                            <div className='vertical'>
                                <div className='md:mx-10 lg:mx-16'>
                                    <span class="inline-block rounded-lg ">
                                        <div class="inline-flex align-middle justify-center items-center select-none text-white">
                                            <img className='h-20' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Discord_xn9tuy.svg" alt="Discord-logo" />
                                        </div>
                                    </span>
                                    <h2 class="mt-4 md:mt-7 head text-3xl md:text-[3rem] lg:text-5xl leading-[35px] md:leading-[50px] text-secondaryHover">codemarch <br />community</h2>
                                    <p class="md:leading-7 lg:leading-10 mt-2 md:mt-5 lg:mt-5 lg:mx-[3.9px] sm:mt-1 block text-base  text-secondaryText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </p>
                                    <p className='gradient-underline mt-2 md:mt-6 lg:mt-6 font-bold leading-[55px] text-secondaryHover text-3xl md:text-4xl lg:text-4xl'>1,000+ Members</p>
                                    <div className='mt-8'>
                                        <a href="https://discord.gg/7g9WddcyKt" className='cursor-pointer'>
                                            <img className='h-10 md:h-11 lg:h-14' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059414/Discord-button_rkohcu.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block rounded-xl p-4">
                            <div className='lg:mx-16 md:mx-10'>                             
                                <span class="inline-block rounded-lg ">
                                    <div class="inline-flex align-middle justify-center items-center select-none text-white">
                                        <img className='h-20' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059826/Twitter_e4irlx.svg" alt="Twitter-logo" />
                                    </div>
                                </span>
                                <h2 class="mt-4 md:mt-7 head text-3xl md:text-[3rem] lg:text-5xl leading-[35px] md:leading-[50px] text-secondaryHover">codemarch<br />on Twitter</h2>
                                <p class="md:leading-7 lg:leading-10 mt-2 md:mt-5 lg:mt-5 lg:mx-[3.9px] sm:mt-1 block text-base  text-secondaryText">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                                <p className='gradient-underline mt-2 md:mt-6 lg:mt-6 font-bold leading-[55px] text-secondaryHover text-3xl md:text-4xl lg:text-4xl'>50,000 Followers</p>
                                <div className='mt-8 '>
                                    <a href="https://twitter.com/codemarch" className='cursor-pointer'>
                                        <img className='h-10 md:h-11 lg:h-14' src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689059414/Twitter-button_zfn2v9.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="community-media card flex mx-10 lg:mx-28 relative">
                        <img className="mx-auto card img-shadow md:h-full" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689064786/codemarch-discord_1_yxe83o.svg" alt="Community" />
                        <img className="absolute h-[98%] top-[.2rem] md:top-[.4rem] lg:top-2 left-[5rem] sm:left-[11rem] md:left-[15rem] lg:left-[22rem]" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1689079507/twt_1_fjl5si.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community