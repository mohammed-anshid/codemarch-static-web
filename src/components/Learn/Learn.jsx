import React, { useEffect, useState } from 'react';
import  './learn.css';
import { useParams } from 'react-router-dom';
import { codecamps } from '..';
import tickIcon from '../../assets/tickIcon.svg'

const Learn = () => {
    const [codecamp, setCodecamp] = useState(null)
    const { id } = useParams()

    console.log(id)

    useEffect(()=> {
        const codecamp = codecamps.find(c => c.id === id);
        setCodecamp(codecamp)
    },[id])

    

    if (!codecamp) {
        return <div>Course not found</div>;
    }
  return (
    <>
        <div
            className='rounded-lg flex flex-col-reverse gap-8 md:gap-[5.5rem] pt-40 md:flex-row'
        >
            <div className='text-sm md:w-[70%] flex flex-col justify-between space-y-3'>
                <h1 className={`text-secondaryHover text-[3.2rem] text-font tracking-tight font-extrabold leading-none  forHeadingBigScreen`}>
                    { codecamp.title}
                </h1>
                <p className='leading-9 font-dm-sans text-sm lg:text-lg  text-[#D7CEA5]' style={{lineHeight:'30px'}}>
                    {codecamp.description.substring(0, 100) + '...'}
                </p>
                <div className='pb-2 flex flex-col text-font  font-bold'>
                    {
                        codecamp.highlights.map((item,index)=>{
                            return (
                                <Points text={item} />
                            )
                        })
                    }
                </div>
                <button disabled className="text-base bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] w-full py-4 rounded-lg font-bold">
                    Coming Soon  <span><img src='' alt="" /></span>
                </button>
            </div>
            <div className="w-full h-[190px] md:h-[430px] bg-slate-500 rounded-2xl bg-cover" style={{ backgroundImage: codecamp ? `url(${codecamp.image})` : 'none' }}></div>
            
        </div>
    </>
  )
}

export default Learn

const Points = ({ text }) => {
    return (
        <div className="flex items-center my-1">
            <img src={tickIcon} alt="" className="w-5 h-5 lg:w-6 lg:h-6 self-center"  width={10} height={10} />
            <h3 className="text-sm font-extrabold text-font lg:text-2xl  bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4 ">
                {text}
            </h3>
        </div>
    );
};