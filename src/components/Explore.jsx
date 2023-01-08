import thunderstorm from '../assets/img/weather-icon/thunderstorm.png';
import rain from '../assets/img/weather-icon/rain.png';
import snow from '../assets/img/weather-icon/snow.png';
import mist from '../assets/img/weather-icon/mist.png';
import sun from '../assets/img/weather-icon/sun.png';
import moon from '../assets/img/weather-icon/moon.png';
import fewCloudsDay from '../assets/img/weather-icon/few-clouds-day.png';
import fewCloudsNight from '../assets/img/weather-icon/few-clouds-night.png';
import clouds from '../assets/img/weather-icon/clouds.png';
import Tilt from 'react-parallax-tilt';

const Explore = ({ city, setQuery }) => {
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
    <Tilt>
      <div
        className="explore-city relative text-sm glassEffect flex flex-col rounded-3xl p-5"
        onClick={() => setQuery({ q: city.name })}
      >
        <figure className="flex justify-center -mt-9">
          <img src={convertIconToImg(city.icon)} className="w-9" alt="sun" />
        </figure>
        <div className="top flex items-center justify-between">
          <div className="w-24 flex items-center justify-center">
            <p>{city.name}</p>
          </div>
          <div className="w-24 flex items-center justify-center">
            <p className="text-base relative font-bold">
              <span>{city.temp.toFixed()}</span>
              <span className="absolute text-yellow-400 -top-1">°</span>
            </p>
          </div>
        </div>

        <div className="middle flex justify-between my-3">
          <div className="h-full w-24 flex flex-col justify-between items-center">
            <p className="text-gray-400 mb-2">High</p>
            <p>{city.temp_max.toFixed()}</p>
          </div>
          <div className="h-full w-24 flex flex-col justify-between items-center">
            <p className="text-gray-400 mb-2">Low</p>
            <p>{city.temp_min.toFixed()}</p>
          </div>
        </div>

        <div className="bottom flex justify-between my-3">
          <div className="h-full w-24 flex flex-col justify-between items-center">
            <p className="text-gray-400 mb-2">Wind</p>
            <p>{`${city.speed.toFixed()} km/h`}</p>
          </div>
          <div className="h-full w-24 flex flex-col justify-between items-center">
            <p className="text-gray-400 mb-2">Humidity</p>
            <p>{`${city.humidity} %`}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Explore;
