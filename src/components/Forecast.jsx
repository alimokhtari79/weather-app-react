import thunderstorm from '../assets/img/weather-icon/thunderstorm.png';
import rain from '../assets/img/weather-icon/rain.png';
import snow from '../assets/img/weather-icon/snow.png';
import mistNight from '../assets/img/weather-icon/mist-night.png';
import mistDay from '../assets/img/weather-icon/mist-day.png';
import sun from '../assets/img/weather-icon/sun.png';
import moon from '../assets/img/weather-icon/moon.png';
import fewCloudsDay from '../assets/img/weather-icon/few-clouds-day.png';
import fewCloudsNight from '../assets/img/weather-icon/few-clouds-night.png';
import clouds from '../assets/img/weather-icon/clouds.png';
import { formatToLocalTime } from '../services/weatherService';

const Forecast = ({ items, weather: { dt, timezone, sunset } }) => {
  // get localTime and localSunset to convert and use witch img for misty day
  const localTime = formatToLocalTime(dt, timezone, 'hh');
  const localSunset = formatToLocalTime(sunset, timezone, 'hh');

  // Converting icon from api to local img
  const convertIconToImg = (icon) => {
    let img = '';
    if (icon === '11d') {
      img = thunderstorm;
    } else if (icon === '09d' || icon === '10d') {
      img = rain;
    } else if (icon === '13d') {
      img = snow;
    } else if (icon === '50d' && localSunset <= localTime) {
      img = mistNight;
    } else if (icon === '50d' && localSunset > localTime) {
      img = mistDay;
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
    <div className="p-6 flex sm:justify-center my-8 overflow-x-auto gap-5">
      {items.map((item) => (
        <div
          key={item.title}
          className="min-w-[6rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125"
        >
          <figure className="w-9">
            <img src={convertIconToImg(item.icon)} alt={item.title} />
          </figure>
          <p className="text-[0.56rem] text-gray-400">{item.title}</p>
          <div className="flex justify-center">
            <span>{item.temp.toFixed()}</span>
            <span className="ml-0.5 text-yellow-400">°</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
