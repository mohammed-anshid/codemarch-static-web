import React from "react";
import Button from "../../assets/images/subscribe-button.svg";
import reportImg from "../../assets/images/letter-img.svg";

function NewsLetter() {
  return (
    <div class="lg:px-[8.5rem] md:px-16 px-16 mx-auto pt-28">
      <div class="w-full rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.5px]">
        <div class="backGround flex h-full w-full rounded-[16px] items-center justify-center  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#205340] via-[#174233]  to-[#002b23]">
          <div className="NewsLetter">
            <div className="textContent lg:mt-14 text-center lg:mx-36">
              <h1 class="head text-6xl text-secondaryHover">
                Unleash Your Developer Superpowers
              </h1>
              <p className="lg:mx-14 lg:mt-9 text-secondaryText font-normal leading-9 text-[16px]">
                Dive into captivating stories, uncover industry trends, and push
                the boundaries of your coding prowess. <br />
                Join us now to unlock coding mastery and be amazed, inspired,
                and transformed!
              </p>
              <button className="mt-9">
                <img className="lg:h-14" src={Button} alt="Button"/>
              </button>
            </div>
            <div className="newsImg lg:mx-31 mt-6">
              <img className="lg:h-[540px] mx-auto" src={reportImg} alt="NewsLetter"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
