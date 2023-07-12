import React from "react";
import "./Courses.css";
import image1 from "../../assets/images/template-group-1.svg"; //Image assests imports
import image2 from "../../assets/images/template-group-2.svg";
import button from "../../assets/images/property-button.svg";
import avatar from "../../assets/images/avatar.svg";
import vector from "../../assets/images/Vector-Arrow.svg";
import approve from "../../assets/images/Vector (1).png";

function Courses() {
  const cards = [
    { text:'Frontend Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',image:`${image1}`},
    { text:'Programming Languages', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',image:`${image2}`}
  ];
  return (
    <div className="lg:px-[8rem] md:px-16 px-16 mx-auto pt-32">
      <div class=" mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
        {/* <!--Card 1--> */}
        {cards.map((card) => {
          return (
            <div class="w-[18rem] md:w-[14rem] lg:w-[95%] mb-7 sm:mx-auto lg:m-auto border-2 rounded-[16px] overflow-hidden bg-[#002b23]  bg-gradient-to-t from-[#001e18]  to-transparent">
              <img class="w-full" src={card.image} alt="Mountain" />
              <div class="lg:px-6">
                <div class="title font-bold mb-2 text-center text-3xl md:text-2xl lg:text-5xl text-secondaryHover">
                  <p className="title">{card.text}</p>
                </div>
                <p class="description lg:text-lg font-light md:text-sm mt-5 lg:mx-3 text-center text-secondaryText">
                  {card.description}
                </p>
              </div>
              <div class="px-6 pt-6 pb-3 text-center mb-5">
                <button>
                  <img className="h-12" src={button} alt="" />
                </button>
              </div>
            </div>
          );
        })}
        <div class="w-[18rem] md:w-[14rem] lg:w-[95%] rounded-[16px] mb-7 sm:mx-auto lg:m-auto border-2  overflow-hidden bg-[#001e18]  bg-gradient-to-t from-[#001e18] to-transparent">
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
              <img className="h-7 m-1 ml-2" src={approve} alt="" />{" "}
            </strong>
          </div>
          <div className="lg:px-6 md:mt-[1.4rem] lg:mt-[6rem]">
            <div className="title font-bold mb-2 text-center text-3xl md:text-2xl lg:text-5xl text-secondaryHover">
              Bulding <br /> Your Brand
            </div>
            <p class="description lg:text-lg font-base md:text-sm mt-5 lg:mx-3 text-center text-secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="px-6 pt-6 pb-3 text-center mb-5">
            <button>
              <img className="h-12" src={button} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
