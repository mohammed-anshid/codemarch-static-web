import React from 'react';
import  './learn.css';

const Learn = () => {
  return (
    <>
        <div
            className='rounded-lg flex flex-col-reverse gap-8 md:gap-[5.5rem] pt-40 md:flex-row'
        >
        <div className='text-sm md:w-[70%] flex flex-col justify-between'>
            <h1 className={`text-[#EDF1E4] text-[4rem] tracking-tight font-bold leading-none  forHeadingBigScreen`}>
                Learn JavaScript
            </h1>
            <p className='leading-10 font-dm-sans text-sm lg:text-lg text-[#D7CEA5]'>
                Learn how to use JavaScript — a powerful and flexible
                programminglanguage for adding website interactivity.
            </p>
            <div className='pb-3 flex flex-col font-dm-sans font-bold'>
                <Points text="Build core programming concepts" />
                <Points text="Learn object-oriented concepts" />
                <Points text="Read and write JavaScript" />
            </div>
            <button className="text-base bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] w-full py-4 rounded font-bold">
                Enroll Now  <span><img src="" alt="" /></span>
            </button>
        </div>
        <div className="w-full h-[206px] md:h-[430px] bg-slate-500 rounded"></div>
            <h1 className={`text-[#EDF1E4] text-[3.5rem] tracking-tight font-bold  font-darker-grotesque  forHeadingSmallScreen`}>Learn JavaScript</h1>
        </div>
    </>
  )
}

export default Learn

const Points = ({ text }) => {
    return (
        <div className="flex items-center my-3 ">
            <img src="/tickIcon.svg" alt="" className="w-5 h-5 lg:w-8 lg:h-8"  width={32} height={32} />
            <h3 className="text-sm font-bold  lg:text-xl  bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4">
                {text}
            </h3>
        </div>
    );
};