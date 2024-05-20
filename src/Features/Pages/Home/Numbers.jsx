import React from "react";
import "./style.css";
import Image1 from "../../../assets/audience.png";
import Image2 from "../../../assets/onboarding.png";
import Image3 from "../../../assets/assessment.png";
import Image4 from "../../../assets/scheme.png";

function Numbers() {
  return (
    <section className="bg-white ml-10 mr-10 mt-10 p-6 shadow rounded-2xl flex flex-wrap justify-between border-8 border-blue-300">
      <div className="flex flex-col items-center pt-5 md:pl-10 w-full md:w-1/2 lg:w-auto">
        <div>
          <img
            alt="Students"
            src={Image1}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-2xl font-bold">8000+</div>
          <div className="text-xl text-gray-600">Students</div>
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
          <div className="text-2xl font-bold">100+</div>
          <div className="text-xl text-gray-600">Training Partners</div>
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
          <div className="text-2xl font-bold">10+</div>
          <div className="text-xl text-gray-600">Assessment Partner</div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full md:w-1/2 lg:w-auto">
        <div>
          <img
            alt="Schemes"
            src={Image4}
            className="md:w-32 w-24 img-hover-effect"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="text-2xl font-bold">20+</div>
          <div className="text-xl text-gray-600">Schemes</div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
