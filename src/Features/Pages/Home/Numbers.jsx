import React from "react";
import "./style.css";
import Image1 from "../../../assets/audience.png";
import Image2 from "../../../assets/onboarding.png";
import Image3 from "../../../assets/assessment.png";
import Image4 from "../../../assets/scheme.png";

function Numbers() {
  return (
    <section className="bg-[#3C3C3C] ml-10 mr-10 mt-10 p-6 shadow rounded-2xl flex flex-wrap justify-between border-8 border-[#3C3C3C]">
      <div className="flex flex-col items-center pt-5 md:pl-10 w-full md:w-1/2 lg:w-auto">
        <div>
          <img
            alt="Students"
            src={Image1}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-4xl text-[#FFD575] font-bold">8000+</div>
          <div className="text-2xl text-white font-semibold">Students</div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full md:w-1/2 lg:w-auto">
        <div>
          <img
            alt="Training Partners"
            src={Image2}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-4xl text-[#FFD575] font-bold">100+</div>
          <div className="text-2xl text-white font-semibold">
            Training Partners
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full md:w-1/2 lg:w-auto">
        <div>
          <img
            alt="Assessment Partner"
            src={Image3}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-4xl text-[#FFD575] font-bold">10+</div>
          <div className="text-2xl text-white font-semibold">
            Assessment Partner
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full md:w-1/2 lg:w-auto lg:mr-10">
        <div>
          <img
            alt="Schemes"
            src={Image4}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-4xl text-[#FFD575]  font-bold">20+</div>
          <div className="text-2xl text-white font-semibold">Schemes</div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
