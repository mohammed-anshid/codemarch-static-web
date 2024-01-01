/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import  './profile.css';
import ProfileEdit from './ProfileEdit';
import { SiMaildotru } from 'react-icons/si';
import { MdEmail, MdDelete } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { BsFacebook,BsInstagram,BsTwitter,BsDiscord } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';
import { ImLinkedin2 } from 'react-icons/im';
import { IoCopy } from 'react-icons/io5';

function MyAccount() {
  const [state, setState] = useState(false);

  const handleOnClose = () => setState(false);
  return (
    <>
      <div className="pt-48 lg:pb-16 px-9 md:px-16">
        <div className="max-w-screen-xl flex flex-wrap rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] items-center justify-between mx-auto pl-[2px] p-[1.5px]">
          <div class="flex h-full w-full rounded-[16px] bg-[#002b23]  bg-gradient-to-t from-[#001e18] to-transparent">
            <div className="profile-content w-full mt-5 md:mt-9 p-6 md:p-16">

              <div className="border-b pb-4 sm:pb-10">
                <div className="flex ">
                  <div className="block lg:flex">
                    <div className="avatar lg:order-none">
                      <img class="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl" src="https://res.cloudinary.com/dbb0ncoht/image/upload/v1669766152/jeqzeboittcaki593bma.jpg" alt="Default avatar"/>
                    </div>
                    <div className="about hidden lg:block lg:px-10 w-full lg:w-[40rem] ">
                      <div className="name items-start">
                        <h4 className='font-bold head text-5xl text-[#EDF1E4]'>Mohammed Junaid</h4>
                      </div>
                      <div className="bio  text-secondaryText text-lg font-normal leading-9 mt-2 ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                  <div className="action-btn text-base  ml-auto self-start lg:self-center">
                    <button 
                      onClick={() => setState(true)}
                      className="flex w-28 h-8 sm:w-44 sm:h-12 items-center text-[13px] sm:text-lg font-medium bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] md:w-48 md:h-[3rem] justify-center rounded-[6px]">
                      Edit Profile
                      <span className="ml-1 "><BiSolidPencil/></span>
                    </button>
                  </div>
                </div>
                <div className="about lg:hidden lg:px-10 w-full lg:w-[40rem] mt-3 ">
                  <div className="name">
                    <h4 className='font-bold head text-3xl sm:text-5xl text-[#EDF1E4]'>Mohammed Junaid</h4>
                  </div>
                  <div className="bio  text-secondaryText text-xs sm:text-base font-normal leading-7 sm:leading-8 mt-2 ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
              

              <div className="socials">
                <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 mt-10 md:gap-6 lg:gap-0">
                  <div className='social-medias w-full md:pb-[2rem] border-[#EDF1E4] md:border-b lg:border-b-0  flex lg:block justify-between lg:border-r'>
                    <div className="flex text-2xl sm:text-3xl lg:text-3xl items-center gap-3">
                      <span className="text-[#254e3a] text-3xl hidden lg:block"><SiMaildotru/></span>
                      <h4 className='font-bold head text-[#EDF1E4]'>Social Links</h4>
                    </div>
                    <div className="flex md:text-xl items-center lg:text-3xl space-x-6 lg:mt-5 footer-icons">
                      <a href="#" className="text-[#3D8361]  hover:text-[#3D8361] dark:hover:text-white dark:text-gray-400">
                        <BsFacebook/>
                      </a>
                      <a href="https://www.instagram.com/codemarch_/" className="text-[#3D8361] hover:text-[#3D8361] dark:hover:text-white dark:text-gray-400">
                        <BsInstagram/>
                      </a>
                      <a href="https://twitter.com/codemarch?s=20" className="text-[#3D8361] hover:text-[#3D8361] dark:hover:text-white dark:text-gray-400">
                        <BsTwitter/>
                      </a>
                      <a href="https://discord.gg/nqAPUVuZtP" className="text-[#3D8361] hover:text-[#3D8361] dark:hover:text-white dark:text-gray-400">
                        <BsDiscord/>
                      </a>
                      <a href="https://www.linkedin.com/company/codemarch/" className="text-[#3D8361] hover:text-[#3D8361] dark:hover:text-white dark:text-gray-400">
                        <ImLinkedin2/>
                      </a>
                    </div>
                  </div>
                  <div className="email w-full md:pb-[2rem] border-[#EDF1E4] md:border-b lg:border-b-0 flex lg:block justify-between mx-auto">
                    <div className="flex text-2xl sm:text-3xl lg:text-3xl justify-center gap-3">
                      <span className="text-[#254e3a] text-4xl hidden lg:block"><MdEmail/></span>
                      <h4 className='font-bold head text-[#EDF1E4]'>E-mail Address</h4>
                    </div>
                    <div className="copy text-secondaryText text-sm sm:text-[.9rem] md:text-[.9rem] items-center lg:items-baseline lg:mt-5 flex justify-center pl-2 gap-3">
                      <a href='mohammedanshid@gmail.com' className='underline text-name'>mohammedanshid@gmail.com</a>
                      <div className="social-email flex justify-center items-center">
                        <div className="copy-box w-6 h-6 flex items-center justify-center text-[#3D8361] border-[#3D8361] border-2 rounded">
                          <span className='text-center '><IoCopy/></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phone-number w-full border-[#EDF1E4] flex lg:block justify-between lg:border-l">
                    <div className="flex text-2xl sm:text-3xl lg:text-3xl justify-center gap-3">
                      <span className="text-[#254e3a] text-3xl hidden lg:block"><ImPhone/></span>
                      <h4 className='font-bold head text-[#EDF1E4]'>Mobile Number</h4>
                    </div>
                    <div className="copy text-secondaryText text-sm sm:text-[1rem] items-center lg:items-baseline justify-center lg:mt-5 flex gap-3">
                      <a href='' className='underline'><span>+91</span>7012437667</a>
                      <div className="copy-box w-6 h-6 flex items-center justify-center text-[#3D8361] border-[#3D8361] border-2 rounded">
                        <span className='text-center '><IoCopy/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="delete-account head mt-14 text-center text-secondaryHover">
                <button className='bg-[#2B0000] inline-flex w-52 h-12 items-center justify-center rounded-md text-xl lg:pb-1 border border-[#FF0000] font-semibold'>Delete my Account  <span className="text-xl mt-1 ml-2"><MdDelete/></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileEdit onClose={handleOnClose} visible={state} />
    </>
  )
}

export default MyAccount