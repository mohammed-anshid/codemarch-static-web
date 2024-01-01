/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import  './profile.css';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { BsInstagram,BsTwitter,BsDiscord } from 'react-icons/bs';

import avatarDefault from '../../../assets/images/default-avatar.jpg';

const ProfileEdit = ({visible, onClose }) => {
  const handleOnClose = (e) => {
    if(e.target.id === "container") onClose();
  };  
        
  if(!visible) return null;   
  const profile = '';
  return (
    <>
        <div 
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-opacity-30 z-20  backdrop-blur-lg flex justify-center items-center"
        >
            <div className="bg-fixed bg-gradient-to-t bg-[#002b23] from-[#001e18] via-[#002b23] to-transparent w-[23rem] sm:w-[35rem] md:w-[50rem] lg:w-[60rem]  md:h-[40rem] border-2 rounded-xl">
                <div className="profile-edit p-7 md:p-10 lg:p-14">
                    <div className="header-section flex justify-between">
                        <h2 className="text-secondaryHover text-3xl head font-bold">Edit Profile</h2>
                        <span className="text-3xl text-[#494949]"><MdOutlineClose/></span>
                    </div>
                    <div className="edit-form">
                        <form action="">
                            <div className="lg:flex block justify-between gap-10 mt-4">
                                <div class="flex md:items-center mb-3 w-3/5 lg:gap-6 gap-x-[6.2rem]">
                                    <div class="self-center">
                                        <label class=" text-secondaryText font-normal md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Photo
                                        </label>
                                    </div>
                                    <div class="mt-2 flex items-center gap-x-6">
                                        <img class="w-14 h-14 rounded-full" src={ profile ? profile : avatarDefault } alt="Rounded avatar"/>
                                        <button type="button" class="rounded-md bg-transparent px-3 py-1.5 text-sm border font-normal text-secondaryHover shadow-sm">Change</button>
                                    </div>
                                </div>
                                <div class="flex md:items-center mb-3 w- ml-auto w-full lg:gap-6 gap-x-[6.2rem]">
                                    <div class="self-center">
                                        <label class="block text-secondaryText font-normal items-center md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Name 
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <div>
                                            <input id="name" type="text" className="h-9 sm:h-12 w-full rounded-lg bg-[#002b23] px-4 leading-tight border-2 border-[#3D8361] outline-none text-secondaryHover focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:items-center mb-6 lg:gap-6 gap-x-[6.2rem]">
                                <div class="self-center">
                                    <label class=" text-secondaryText font-normal md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        About
                                    </label>
                                </div>
                                <div class="mt-2 flex items-center gap-x-6 w-full">
                                    <textarea id="About" name="about" rows="3" className="block resize-none py-1 w-full rounded-lg bg-[#002b23] px-4 leading-tight border-2 border-[#3D8361] outline-none text-secondaryHover focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]"></textarea>
                                </div>
                            </div>

                            <div className="lg:flex block justify-between gap-20 mt-4">
                                <div class="flex md:items-center mb-3 ml-auto w-full lg:gap-5 gap-x-[6rem]">
                                    <div class="self-center whitespace-nowrap">
                                        <label class="block text-secondaryText font-normal items-center md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            E-mail 
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <div>
                                            <input id="name" type="text" className="h-9 sm:h-12 w-full rounded-lg bg-[#002b23] px-4 leading-tight border-2 border-[#3D8361] outline-none text-secondaryHover focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" /> 
                                        </div>
                                    </div>
                                </div>
                                <div class="flex md:items-center mb-3 w- ml-auto w-full lg:gap-6 gap-x-[1.9rem]">
                                    <div class="self-center whitespace-nowrap">
                                        <label class="block text-secondaryText font-normal items-center md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <div>
                                            <input id="name" type="text" className="h-9 sm:h-12 w-full rounded-lg bg-[#002b23] px-4 leading-tight border-2 border-[#3D8361] outline-none text-secondaryHover focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:items-center mb-6 lg:gap-4 gap-x-[5.8rem]">
                                <div class="self-start">
                                    <label class=" text-secondaryText font-normal md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Socials
                                    </label>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-1 w-full">
                                    <div className="w-full border-r border-secondaryText ">
                                        <div className='space-y-5'>
                                            <div class="relative text-gray-600 focus-within:text-gray-400">
                                                <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                                                    <div class="p-1 w-9 border-r-2 border-[#3D8361] focus:outline-none focus:shadow-outline ">
                                                       <span className='text-2xl text-[#3D8361]'><FaFacebook/></span>
                                                    </div>
                                                </span>
                                                <input id="Facebook" type="text" className="h-10 pl-12 sm:h-12 w-full lg:w-5/6  rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" />
                                            </div>
                                            <div class="relative text-gray-600 focus-within:text-gray-400">
                                                <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                                                    <div class="p-1 w-9 border-r-2 border-[#3D8361] focus:outline-none focus:shadow-outline ">
                                                       <span className='text-2xl text-[#3D8361]'><BsInstagram/></span>
                                                    </div>
                                                </span>
                                                <input id="Instagram" type="text" className="h-10 pl-12 sm:h-12 w-full lg:w-5/6  rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" />
                                            </div>
                                            <div class="relative text-gray-600 focus-within:text-gray-400">
                                                <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                                                    <div class="p-1 w-9 border-r-2 border-[#3D8361] focus:outline-none focus:shadow-outline ">
                                                       <span className='text-2xl text-[#3D8361]'><BsTwitter/></span>
                                                    </div>
                                                </span>
                                                <input id="Twitter" type="text" className="h-10 pl-12 sm:h-12 w-full lg:w-5/6  rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className='space-y-5'>
                                            <div class="relative flex justify-end text-gray-600 focus-within:text-gray-400">
                                                <span class="absolute inset-y-0 left-0 md:left-0 lg:left-16 flex items-center pl-2 ">
                                                    <div class="p-1 w-9 border-r-2 border-[#3D8361] focus:outline-none focus:shadow-outline ">
                                                       <span className='text-2xl text-[#3D8361]'><BsDiscord/></span>
                                                    </div>
                                                </span>
                                                <input id="Discord" type="text" className="h-10 pl-12 sm:h-12 w-full lg:w-5/6  rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" />
                                            </div>

                                            <div class="relative flex justify-end text-gray-600 focus-within:text-gray-400">
                                                <span class="absolute inset-y-0 left-0 md:left-0 lg:left-16 flex items-center pl-2 ">
                                                    <div class="p-1 w-9 border-r-2 border-[#3D8361] focus:outline-none focus:shadow-outline ">
                                                       <span className='text-2xl text-[#3D8361]'><FaLinkedinIn/></span>
                                                    </div>
                                                </span>
                                                <input id="Linkedin" type="text" className="h-10 pl-12 sm:h-12 w-full lg:w-5/6  rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="lg:flex block justify-between gap-10 mt-4 w-full">
                                <div className="flex gap-6 w-[26rem] lg:gap-6 gap-x-[6.2rem]">
                                    <div className="label pr-3">
                                        <label htmlFor="">E-mail</label>
                                    </div>
                                    <div class="">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full lg:w-[20rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
                                    </div>
                                </div>
                                <div className='flex gap-6 lg:gap-6 gap-x-[2.8rem]'>
                                    <div className="label self-center">
                                        <label htmlFor="">Phone Number</label>
                                    </div>
                                    <div class="">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
                                    </div>
                                </div>
                            </div> */}
                            
                            
                            {/* <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3 flex w-full">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div class="mt-2">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-5">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div class="mt-2">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

        

                                <div class="col-span-full">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                    <div class="mt-2">
                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div class="mt-2">
                                        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                    <div class="mt-2">
                                        <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div class="mt-2">
                                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </div> */}

                        </form>
                        <div className="submit-btn w-full flex justify-end">
                            <button className="flex w-40 h-10 items-center text-[#002b23] font-bold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] md:h-[2.7rem] justify-center rounded-[6px]">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileEdit