import thunderstorm from '../assets/img/weather-icon/thunderstorm.png';
import rain from '../assets/img/weather-icon/rain.png';
import snow from '../assets/img/weather-icon/snow.png';
import mist from '../assets/img/weather-icon/mist.png';
import sun from '../assets/img/weather-icon/sun.png';
import moon from '../assets/img/weather-icon/moon.png';
import fewCloudsDay from '../assets/img/weather-icon/few-clouds-day.png';
import fewCloudsNight from '../assets/img/weather-icon/few-clouds-night.png';
import clouds from '../assets/img/weather-icon/clouds.png';

const Forecasts = ({ items, title }) => {
  // Converting icon from api to local img
  const convertIconToImg = (icon) => {
    let img = '';
    if (icon === '11d') {
      img = thunderstorm;
    } else if (icon === '09d' || icon === '10d') {
      img = rain;
    } else if (icon === '13d') {
      img = snow;
    } else if (icon === '50d') {
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
    <div className="flex justify-center">
      <div className="flex flex-col w-10/12">
        <header>{title}</header>
        <div className="py-6 sm:p-6 flex sm:justify-center my-5 overflow-x-auto gap-5">
          {items.map((item) => (
            <Forecast
              item={item}
              key={item.title}
              convertIconToImg={convertIconToImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecasts;

const Forecast = ({ item, convertIconToImg }) => {
  return (
    <div className="min-w-[5rem] h-24 justify-between px-1 flex flex-col items-center transition hover:scale-125">
      <figure className="w-9">
        <img src={convertIconToImg(item.icon)} alt={item.title} />
      </figure>
      <p className="text-[0.56rem] text-gray-400">{item.title}</p>
      <div className="flex justify-center">
        <span>{item.temp.toFixed()}</span>
        <span className="ml-0.5 text-yellow-400">°</span>
      </div>
    </div>
  );
};
