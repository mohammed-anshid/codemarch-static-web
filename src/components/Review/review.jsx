import React from "react";
import "./review.css"
import RatingStars from "../RatingStars/RatingStars";
import { BsTwitter } from 'react-icons/bs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Review = () => {
  const arr = [
    { value: 1, rate: 2 },
    { value: 2, rate: 3 }, 
    { value: 3, rate: 5 },
    { value: 4, rate: 4 }, 
    { value: 5, rate: 1 }, 
    { value: 6, rate: 3 }, 
    { value: 7, rate: 5 },  
    { value: 8, rate: 2 },  
  ];


  return (
      <>
        <div className="mt-5  flex gap-3 lg:gap-8 overflow-x-scroll forScroll pb-4 ">
          {
            arr.map((value)=>(
              <div className="forBorderPadding  bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.6px] rounded-[20px] min-w-[80%] md:min-w-[385px]  w-full ">
                <div className="pt-10 px-4 lg:px-8 h-full min-w-full md:min-w-full rounded-[20px] bg-[#052621]  bg-gradient-to-t from-[#031c18] to-transparent">
                  <RatingStars ratingValue={value.rate}/>
                  <p className="font-normal text-[#D7CEA5] mt-5 leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <div className="flex justify-between mt-8 mb-7">
                    <div className="flex gap-4">
                      <img class="w-11 h-11 rounded-lg" src="https://res.cloudinary.com/dbb0ncoht/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1687352753/man_a2sfui.png" alt="Default avatar"/>
                      <div className="flex flex-col justify-center">
                        <h2 className="font-dm-sans text-[#EDF1E4]">John Doe</h2>
                        <p className="font-dm-sans text-sm text-[#3D8361]">@johndoe</p>
                      </div>
                    </div>
                    <span className="self-center text-[#3D8361] text-3xl"><BsTwitter/></span>
                  </div>
                </div>
              </div>
            ))
          }
          
        </div>

        {/* button-for-drag */}

        {/* <div className='w-72 h-12  rounded-lg border-t  bg-gradient-to-b from-[#3d8361ef] via-[#3d836158] to-transparent flex items-center mx-auto mt-7'>
          <div className='flex justify-between w-full p-3'>
            <button className="prev-btn text-secondaryText text-sm" onClick={handlePrev}><FaArrowLeft/></button>
            <p className='text-sm font-semibold text-secondaryText'>Swipe to view more Features</p>
            <button className="next-btn text-secondaryText text-sm" onClick={handleNext}><FaArrowRight/></button>
          </div>
        </div> */}
      </>
  );
};

export default Review;
