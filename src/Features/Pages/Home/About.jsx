import React from "react";
import AbouImg from "../../../../public/abt.jpg";

const About = () => {
  return (
    <div className="bg-[#F4F4F4] sm:min-h-[600px] sm:grid sm:place-items-center duration-300 mt-7">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={AbouImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-26 mt-10 pb-6 ">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-6 tracking-wide">
                Centurion University of Technology and Management (CUTM) is a
                pioneering skill-awarding body dedicated to transforming
                education and empowering individuals through a unique blend of
                academic rigor and hands-on training. Established with the
                vision of bridging the gap between traditional education and
                industry requirements, we focus on fostering a culture of
                innovation, excellence, and inclusivity.
              </p>
              <p data-aos="fade-up" className="leading-6">
                We provide a comprehensive array of skill development programs
                designed to meet the current and future demands of various
                industries. Our curriculum is crafted in collaboration with
                industry experts, ensuring relevance and applicability.
                Facilitating improved market access to goods and financial
                services to the target population. Promotion of lighthouse
                project interventions in the target area.
              </p>
              <button className="btn bg-[#A41034] text-white font-semibold px-3 py-1 rounded">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
