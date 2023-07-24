/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{ useState,useEffect } from "react";
import './Brand.css';
import button from "../../assets/images/property-button.svg";
import vector1 from "../../assets/Banner/vector-1.svg"
import vector2 from "../../assets/Banner/vector-2.svg"
import vector3 from "../../assets/Banner/vector-3.svg"
import { useMediaQuery } from 'react-responsive';
import CardMd from "../Cards/CardMd";

function Brand() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 1026 });

  const cards = [
    {title:'Code',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Group_1_1_nqvkdt.svg',img2:vector1},
    {title:'Brand',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Vector_1_rxactb.svg',img2:vector2},
    {title:'Crack',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Group_1_e6fxxq.svg', img2:vector3}
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-[1rem] md:px-[2rem] justify-items-center justify-center  mx-auto lg:pt-7">
      <div className="overflow-x-auto">
        {
          isMdScreenOrLarger ? 
          (
            <div className="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:justify-items-center md:justify-center gap-x-72 md:gap-x-11 mb-5 pt-40 overflow-y-hidden overflow-x-auto">
            {cards?.map((card,index) => {
              return (
                <div className="flex flex-col items-center relative">
                  <div className={`w-[17rem] md:w-[17rem] lg:w-[20rem] rounded-[20px] ${index===currentCardIndex ? 'bg-gradient-to-b from-secondaryHover via-[#edf1e467] to-transparent' :'bg-gradient-to-b from-[#5c6e66] via-[#2e4942] to-transparent'}   p-[3.3px] shadows`}>
                    <div className="h-full rounded-[18px] items-center justify-center bg-gradient-to-b from-[#001e18] via-[#031915] to-transparent">
                      <div className="h-[10rem] lg:h-[19rem] lg:w-72 mx-auto flex justify-center items-center relative">
                        <img
                          src={index === currentCardIndex ? card.img2 : card.img}
                          alt="Product"
                          className={`image-svg h-24 md:h-48 md:w-48 lg:h-52 lg:w-52 mx-auto justify-center rounded-t-xl imgs ${index === currentCardIndex ? 'fade-in-element' :''} `}
                        />
                      </div>
                    </div>
                  </div> 
                  <h2 className={`text-[#D7CEA5] ${index === currentCardIndex ? 'hoverText' : ''} text-center mt-[-70px] font-semibold md:text-[5.9rem] lg:text-[6.9rem]`}>{card.title}</h2>
                </div> 
              );
            })}
          </div>
          ):
          (
            <CardMd/>
          )
        }

      </div>
      <div className="content lg:mx-96 mx-7 text-center">
        <h3 className="lg:text-[1.4rem] leading-[40px] text-[#EDF1E4]">
          Master coding, build your brand & land your dream job. <br /> Launch your coding career with confidence
        </h3>
        <button className="w-56 mt-14">
          <img src={button} alt="" />
        </button>
      </div>
    </section>
    
  );
}

export default Brand;
