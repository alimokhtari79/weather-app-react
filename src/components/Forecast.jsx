import React from 'react';

const Forecast = () => {
  return (
    <div className="p-6 flex sm:justify-center my-8 overflow-x-auto gap-5">
      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img src={require('../assets/img/weather-icon/sun.png')} alt="" />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>

      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img src={require('../assets/img/weather-icon/clouds.png')} alt="" />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>

      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img
            src={require('../assets/img/weather-icon/few-clouds-day.png')}
            alt=""
          />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>

      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img
            src={require('../assets/img/weather-icon/few-clouds-night.png')}
            alt=""
          />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>

      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img
            src={require('../assets/img/weather-icon/mist-day.png')}
            alt=""
          />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>

      <div className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
        <figure className="w-9">
          <img src={require('../assets/img/weather-icon/snow.png')} alt="" />
        </figure>
        <p className="text-[0.56rem] text-gray-400">01:00 pm</p>
        <div className="flex justify-center">
          <span>10</span>
          <span className="ml-0.5">°</span>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
