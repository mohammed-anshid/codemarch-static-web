import React,{ useState, useEffect } from 'react';
import './CardMd.css';
import vector1 from "../../assets/Banner/vector-1.svg"
import vector2 from "../../assets/Banner/vector-2.svg"
import vector3 from "../../assets/Banner/vector-3.svg"

function CardMd() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {title:'Code',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Group_1_1_nqvkdt.svg',img2:vector1},
    {title:'Brand',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Vector_1_rxactb.svg',img2:vector2},
    {title:'Crack',img:'https://res.cloudinary.com/dbb0ncoht/image/upload/v1689154320/Group_1_e6fxxq.svg', img2:vector3}
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the currentCard by 1
      setCurrentCardIndex((prevCard) => (prevCard + 1) % cards.length);
    }, 4000); // 4-second delay

    return () => {
      clearTimeout(timer);
    };
  }, [currentCardIndex, cards.length]);
  return (
    <section className="px-[1rem] md:px-[2rem] justify-items-center justify-center  mx-auto lg:pt-7">
      <div className=" slideshow-container">
        <div className="w-fit mx-auto grid grid-cols-1 md:justify-items-center md:justify-center gap-x-72 md:gap-x-11 mb-5 pt-40 overflow-y-hidden overflow-x-auto">
            <div className={`flex flex-col items-center relative slide-card ${currentCardIndex === 0 ? 'active' : 'inactive'}`}>
                <div className="w-[17rem]  md:w-[20rem] rounded-[20px] bg-gradient-to-b from-[#5c6e66] via-[#2e4942] to-transparent p-[3.3px] shadows">
                    <div className="h-full rounded-[18px] items-center justify-center bg-gradient-to-b from-[#001e18] via-[#031915] to-transparent">
                        <div className="h-[14rem] w-[13rem] md:h-[19rem] md:w-72 mx-auto flex justify-center items-center relative">
                            <img
                                src={ cards[currentCardIndex] ? cards[currentCardIndex]?.img2 : cards[currentCardIndex].img}
                                alt="Product"
                                className="image-svg h-[9rem] w-[9rem]  md:h-52 md:w-52 mx-auto justify-center rounded-t-xl imgs"
                            />
                        </div>
                    </div>
                </div> 
                <h2 className={`text-[#D7CEA5] ${ cards[currentCardIndex] ? 'hoverText' : ''} text-center mt-[-70px] font-semibold text-[5.9rem] md:text-[6.9rem]`}>{cards[currentCardIndex].title}</h2>
            </div> 
        </div>
      </div>
    </section>
  )
}

export default CardMd