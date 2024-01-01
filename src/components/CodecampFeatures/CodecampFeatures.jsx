import React, { useRef } from 'react';
import './codecampFeatures.css';
import Slider from 'react-slick';
import { FaLightbulb,FaRegCheckCircle,FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import { ImStarFull } from 'react-icons/im';
import { featuresCard } from '..';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CodecampFeatures = () => {
    const slickRef = useRef(null);
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: (dots) => <ul className="ft-slick__dots--custom" style={{bottom:'-50px'}}>{dots}</ul>,
        customPaging: (i) => <div className="dot" key={i} />, 
    };  

    const handlePrev = () => {
        slickRef.current.slickPrev();
    };
    
    const handleNext = () => {
        slickRef.current.slickNext();
    };

    const cardData = [
        {
            icon: <ImStarFull />,
            heading: "Interactive Daily Lessons",
            text: "Dive into engaging, daily modules designed to build your coding skills step by step. Whether you're a beginner or looking to enhance your knowledge, our lessons cater to all levels.",
        },
        {
            icon: <FaLightbulb />,
            heading: "Weekly Live 1:1 Reviews",
            text: "Connect with experts in live weekly sessions. Gain personalized feedback, deepen your understanding, and stay motivated in your coding journey.",
        },
        {
            icon: <FaRegCheckCircle />,
            heading: "24/7 Doubt Support",
            text: "Coding challenges don't stick to a schedule, and neither do we. Our round-the-clock support ensures you're never stuck, providing timely and effective solutions to your queries.",
        },
    ];
  
  return (
    <>
        <div className="pt-24 md:pt-10 lg:pb-16 px-9 md:px-16">
            <div className='hidden lg:block'>
                <div className="border-gradient max-w-screen-xl flex flex-col lg:flex-row  gap-3 mx-auto p-1 ">
                    {cardData.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.icon && (
                                <Card icon={item.icon} heading={item.heading} text={item.text} />
                            )}
                            {( index === 0 || index === 1 ) && (
                                <div className="h-[2px] my-10 bg-gradient-to-r lg:my-0 lg:w-[2px] lg:h-auto lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500]"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="bootcamps max-w-screen-xl lg:hidden pb-10">
                <Slider {...settings} ref={slickRef}>
                    {cardData.map((item,index) => (
                        <Card key={index} icon={item.icon} heading={item.heading} text={item.text} />
                    ))}
                </Slider>
            </div>
        
            <div className='w-72 h-12  lg:hidden rounded-lg border-t  bg-gradient-to-b from-[#3d8361ef] via-[#3d836158] to-transparent flex items-center mx-auto mt-7'>
                <div className='flex justify-between w-full p-3'>
                    <button className="prev-btn text-secondaryText text-sm" onClick={handlePrev}><FaArrowLeft/></button>
                    <p className='text-sm font-semibold text-secondaryText'>Swipe to view more Features</p>
                    <button className="next-btn text-secondaryText text-sm" onClick={handleNext}><FaArrowRight/></button>
                </div>
            </div>
            
        </div>
    </>
  )
}

const Card = ({ icon, heading, text }) => {
    return (
        <div className="px-2">
            <div className='h-[4rem] w-[4rem] md:h-[4.5rem] md:w-[4.5rem] bg-gradient-to-b from-[#001B16] to-transparent rounded-xl border-2  border-[#edf1e47f] flex items-center justify-center'>
                <span className='text-center bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-secondaryHover self-center text-3xl md:text-4xl'>{icon}</span>
            </div>
            <h1 className="mt-5 text-3xl md:text-4xl header font-extrabold text-[#EDF1E4]">{heading}</h1>
            <p className="mt-5 md:mt-8 leading-7 md:leading-10 text-sm md:text-base text-[#D7CEA5] lg:max-w-[500px]">
                {text}
            </p>
        </div>
    );
};

