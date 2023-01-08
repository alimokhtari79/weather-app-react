import React from 'react';
import thunderstorm from '../assets/img/weather-icon/thunderstorm.png';
import rain from '../assets/img/weather-icon/rain.png';
import snow from '../assets/img/weather-icon/snow.png';
import mist from '../assets/img/weather-icon/mist.png';
import sun from '../assets/img/weather-icon/sun.png';
import moon from '../assets/img/weather-icon/moon.png';
import fewCloudsDay from '../assets/img/weather-icon/few-clouds-day.png';
import fewCloudsNight from '../assets/img/weather-icon/few-clouds-night.png';
import clouds from '../assets/img/weather-icon/clouds.png';

const Temperature = ({
  weather: { detail, icon, temp, dt, timezone, sunset },
}) => {
  // Converting icon from api to local img
  const convertIconToImg = (icon) => {
    let img = '';
    if (icon === '11d') {
      img = thunderstorm;
      
    } else if (icon === '09d' || icon === '10d') {
      img = rain;
    } else if (icon === '13d') {
      img = snow;
    } else if (icon === '50d' || icon === '50n') {
      img = mist;
    } else if (icon === '01d') {
      img = sun;
    } else if (icon === '01n') {
      img = moon;
    } else if (icon === '02d') {
      img = fewCloudsDay;
    } else if (icon === '02n') {
      img = fewCloudsNight;
    } else {
      img = clouds;
    }
    return img;
  };

  return (
    <div className="flex items-center flex-col">
      <div className="w-full flex justify-center mt-8 sm:mt-0">
        <figure>
          <img
            className="w-48 md:w-72 py-10 max-w-full
            "
            src={convertIconToImg(icon)}
            alt="weather-icon"
          />
        </figure>
      </div>
      <p className="font-semibold">{detail}</p>
      <p className="text-6xl mt-5 relative">
        <span>{temp.toFixed()}</span>
        <span className="absolute text-5xl text-yellow-400 -top-2 ">°</span>
      </p>
    </div>
  );
};

export default Temperature;
