import React, { useEffect } from "react";
import "./Courses.css";
import ScrollReveal from 'scrollreveal';
import image1 from "../../assets/images/template-group-1.svg"; //Image assests imports
import image2 from "../../assets/images/template-group-2.svg";
import button from "../../assets/images/property-button.svg";
import avatar from "../../assets/images/avatar.svg";
import vector from "../../assets/images/Vector-Arrow.svg";
import approve from "../../assets/images/Vector (1).png";
import { FaArrowRight } from "react-icons/fa";
import tickIcon from '../../assets/tickIcon.svg'
import { useNavigate } from "react-router-dom";

function Courses() {

  const navigate = useNavigate();

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

  //temporarily function 
  const toNavigate  = () => {
    navigate('/codecamps')
  }

  const cards = [
    { text:'Frontend Development', description:['Master HTML, CSS, JavaScript & React.','Responsive Web design','Real-world projects and portfolio building'],image:`${image1}`},
    { text:'Programming Languages', description: ['Basics to advanced coding concepts','Learn JavaScript and more','Problem-solving and coding challenges'],image:`${image2}`}
  ];

  const data = ['Develop a unique developer identity','Online presence and networking strategies','Portfolio creation and interview skills']
  return (
    <div className="container px-[2.1rem] md:px-[4rem] lg:px-[8.5rem] mx-auto mb-11 pt-28">
      <div className="overflow-x-auto">
        <div class="mx-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-80 md:gap-36 lg:gap-6">
          {/* <!--Card 1--> */}
          {cards.map((card) => {
            return (
              <div class="w-[18rem] md:w-[15rem] mt-5 lg:w-[95%] lg:m-auto mx-auto rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.6px]">
                <div class="mx-auto mb-7 lg:m-auto h-full rounded-[16px] overflow-hidden bg-[#002b23]  bg-gradient-to-t from-[#001e18]  to-transparent">
                    <img class="w-full" src={card.image} alt="Progress" />
                  <div class="lg:px-6">
                    <div class="title font-bold mb-2 mx-3 text-center text-3xl md:text-2xl lg:text-5xl text-secondaryHover">
                      <p className="title">{card.text}</p>
                    </div>
                    <div class="description lg:text-lg font-light md:text-sm mt-5 lg:mx-3 mx-2  text-secondaryText">
                      {
                        card?.description?.map((item )=> (
                          <div className="flex my-1">
                            <img src={tickIcon} alt="" className="w-4 h-4 lg:w-5 lg:h-5 self-center"  width={10} height={10} />
                            <h3 className="text-sm font-medium text-font lg:text-xl  bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4 ">
                              {item}
                            </h3>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div class="px-6 pt-6 pb-3 mb-3 text-center">
                    {/* <button className="btn flex mx-auto items-center text-center font-bold text-[#01221C] md:text-[1.3rem] bg-gradient-to-b from-brandText to-brandHover w-52 md:w-52 h-10 md:h-12 justify-center mt-6 md:mt-9 lg:mt-10 rounded-[9px]">
                      Explore<span className="ml-1 md:ml-[4px] text-xs md:text-[1.1rem]"><FaArrowRight/></span>
                    </button> */}
                    <button onClick={toNavigate}>
                      <img className="h-12" src={button} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div class="w-[18rem] md:w-[15rem] mt-5 lg:w-[95%] lg:m-auto mx-auto rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.6px]">
            <div class="mx-auto mb-7 h-full lg:m-auto rounded-[16px] overflow-hidden bg-[#001e18]  bg-gradient-to-t from-[#001e18] to-transparent">
              <div className="w-full border-b border-secondaryText bg-[#001e18] bg-opacity-80 ">
                <div className="py-4 px-10">
                  <img className="w-[90%]" src={vector} alt="Arrow" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-28 h-28 mx-auto text-center">
                  <img
                    className="avatar-image border border-secondaryText rounded-[50%]  bg-gradient-to-t from-[#001e18] to-[#0a3b2f]"
                    src={avatar}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex mt-[2rem]">
                <strong className="text-secondaryHover flex lg:text-3xl mx-auto">
                  You
                  <img className="h-5 lg:h-7  lg:m-1 ml-2" src={approve} alt="" />{" "}
                </strong>
              </div>
              <div className="lg:px-6 mt-[3.3rem] md:mt-[1.4rem] lg:mt-[5.7rem]">
                <div className="title font-bold mb-2 text-center text-3xl md:text-2xl lg:text-5xl text-secondaryHover">
                  Bulding <br /> Your Brand
                </div>
                <p class="description lg:text-lg font-light md:text-sm mt-6 mx-2 lg:mx-3  text-secondaryText">
                  {
                    data?.map((item)=> (
                      <div className="flex my-1">
                        <img src={tickIcon} alt="" className="w-4 h-4 lg:w-5 lg:h-5 self-center"  width={10} height={10} />
                        <h3 className="text-sm font-medium text-font lg:text-xl  bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4 ">
                          {item}
                        </h3>
                      </div>

                    ))
                  }
                </p>
              </div>
              <div class="px-6 pt-7 pb-5 mb-3 text-center">
                <button onClick={toNavigate}>
                  <img className="h-12" src={button} alt="" />
                </button>
                {/* <button className="btn flex mx-auto items-center text-center font-bold text-[#01221C] md:text-[1.3rem] bg-gradient-to-b from-brandText to-brandHover w-52 md:w-52 h-10 md:h-12 justify-center mt-6 md:mt-9 lg:mt-10 rounded-[9px]">
                  Explore<span className="ml-1 md:ml-[4px] text-xs md:text-[1.1rem]"><FaArrowRight/></span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Courses;
