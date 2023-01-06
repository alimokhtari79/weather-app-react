import { IoChevronBack } from 'react-icons/io5';

const ExplorePage = () => {
  return (
    <div className="p-6">
      <header className="flex items-center justify-between">
        <button>
          <IoChevronBack />
        </button>
        <p>Explore</p>
        <div></div>
      </header>
      <div className="explore-container my-6">
        <div className="explore-county relative text-sm exploreShadow w-96 flex flex-col rounded-3xl p-5">
          <figure className="absolute -top-4 right-44">
            <img
              src={require('../assets/img/weather-icon/thunderstorm.png')}
              className="w-9"
              alt="sun"
            />
          </figure>
          <div className="top flex items-center justify-between">
            <div className="w-24 flex items-center justify-center">
              <p>Islamabad</p>
            </div>
            <div className="w-24 flex items-center justify-center">
              <p className="text-base relative font-bold">
                <span>13</span>
                <span className="absolute text-yellow-400 -top-1 ">°</span>
              </p>
            </div>
          </div>

          <div className="middle flex justify-between my-3">
            <div className="h-full w-24 flex flex-col justify-between items-center">
              <p className="text-gray-400 mb-2">High</p>
              <p>15</p>
            </div>
            <div className="h-full w-24 flex flex-col justify-between items-center">
              <p className="text-gray-400 mb-2">Low</p>
              <p>-5</p>
            </div>
          </div>

          <div className="bottom flex justify-between my-3">
            <div className="h-full w-24 flex flex-col justify-between items-center">
              <p className="text-gray-400 mb-2">Wind</p>
              <p>15 km/h</p>
            </div>
            <div className="h-full w-24 flex flex-col justify-between items-center">
              <p className="text-gray-400 mb-2">Humidity</p>
              <p>30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
