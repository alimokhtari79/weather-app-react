import React from 'react';

const Temperature = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="w-full flex justify-center mt-8 sm:mt-0">
        <figure>
          <img
            className="w-48 md:w-72 py-10 max-w-full
            "
            src={require('../assets/img/weather-icon/thunderstorm.png')}
            alt="weather-icon"
          />
        </figure>
      </div>
      <p className="font-semibold">Thunder</p>
      <p className="text-6xl mt-5 relative">
        <span>13</span>
        <span className="absolute text-5xl text-yellow-400 -top-2 ">°</span>
      </p>
    </div>
  );
};

export default Temperature;
