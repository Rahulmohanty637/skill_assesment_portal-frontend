import React from 'react';

const LocateUs = () => {
  const address = `
    1600 Amphitheatre Parkway
    Mountain View, CA 94043
    USA
    Phone: (123) 456-7890
  `;
  const googleMapsLink = "https://www.google.com/maps/place/1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043";
  const googleMapsImageSrc = "https://cdn.wccftech.com/wp-content/uploads/2020/08/Google-Maps.jpg";

  return (
    <section className="bg-white m-10 p-6 shadow rounded-2xl flex flex-wrap justify-between border-8 border-blue-300">
      <div className="flex flex-col items-start pt-5 md:pl-10 w-full md:w-1/2 lg:w-1/3">
        <div className="mt-2 text-left">
          <div className="text-xl font-bold">Our Office</div>
          <p className="mt-2 text-gray-600 whitespace-pre-line">
            {address}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full md:w-1/2 lg:w-2/3">
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <img
            alt="Google Maps Location"
            src={googleMapsImageSrc}
            className="w-full h-auto md:w-auto md:h-64 lg:h-80 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
};

export default LocateUs;
