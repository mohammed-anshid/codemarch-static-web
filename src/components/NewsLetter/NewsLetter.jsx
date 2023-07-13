import React from "react";
import Button from "../../assets/images/subscribe-button.svg";
import reportImg from "../../assets/images/letter-img.svg";

function NewsLetter() {
  return (
    <div class="px-[3rem] md:px-[4rem] lg:px-[8.5rem] mx-auto pt-28">
      <div class="w-full rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.5px]">
        <div class="backGround flex h-full w-full rounded-[16px] items-center justify-center  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#205340] via-[#174233]  to-[#002b23]">
          <div className="NewsLetter">
            <div className="textContent lg:mt-14 mt-6 text-center lg:mx-[8rem]">
              <h1 class="head text-3xl md:text-5xl lg:text-[4rem] mx-2 text-secondaryHover">
                Unleash Your Developer Superpowers
              </h1>
              <p className="mx-4 md:mx-5 lg:mx-14 mt-4 md:mt-5 lg:mt-9 text-secondaryText font-normal leading-9 text-bold lg:text-[16.6px] ">
                Dive into captivating stories, uncover industry trends, and push
                the boundaries of your coding prowess.
                Join us now to unlock coding mastery and be amazed, inspired,
                and transformed!
              </p>
              <button className="mt-5 md:mt-9">
                <img className="h-9 md:h-12 lg:h-14" src={Button} alt="Button"/>
              </button>
            </div>
            <div className="newsImg lg:mx-31 mt-7">
              <img className="lg:h-[540px] mx-auto" src={reportImg} alt="NewsLetter"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
