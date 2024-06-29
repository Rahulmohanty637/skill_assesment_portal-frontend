import React from "react";
import Image1 from "../../../assets/audience.png";
import Image2 from "../../../assets/onboarding.png";
import Image3 from "../../../assets/assessment.png";
import Image4 from "../../../assets/scheme.png";

function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gray-600 font-semibold uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Trained students in{" "}
            <span className="text-gray-600">different locations</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptatibus totam nulla temporibus accusantium libero?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            image={Image1}
            number="10,000+"
            title="Students Trained"
            description="Trained 10,000+ students in different states"
          />
          <FeatureCard
            image={Image4}
            number="50+"
            title="Government Projects"
            description="Working with 50+ government projects and organizations"
          />
          <FeatureCard
            image={Image2}
            number="100+"
            title="Training Partners"
            description="We have 100+ Training Partners with us"
          />
          <FeatureCard
            image={Image3}
            number="100+"
            title="Assignment Partners"
            description="We have 100+ Assignment agencies with us"
          />
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ image, number, title, description }) => (
  <div className="bg-[#2e2727] rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="mb-4">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover mx-auto rounded-full border-4 border-blue-100"
      />
    </div>
    <h2 className="text-3xl font-bold text-blue-600 mb-2">{number}</h2>
    <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
    <p className="text-white leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
