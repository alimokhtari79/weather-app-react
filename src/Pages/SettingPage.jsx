import Header from '../components/Header';
import { formatToLocalTime } from '../services/weatherService';

const SettingPage = ({ weather, setUnits, isMetric, setIsMetric }) => {
  const handelChangeUnits = () => {
    setIsMetric(!isMetric);
    if (isMetric) {
      setUnits('metric');
    } else {
      setUnits('imperial');
    }
  };

  return (
    <div className="p-6">
      <Header title="Setting" />
      <div className="setting-container flex flex-col items-center my-6">
        <div className="time text-8xl mb-9">
          <p>
            {weather
              ? formatToLocalTime(weather.dt, weather.timezone, 'hh: mm')
              : ''}
          </p>
        </div>
        <div
          onClick={handelChangeUnits}
          className="w-full py-4 px-7 mb-10 flex justify-between rounded-full glassEffect"
        >
          <p>Temperature based on</p>
          <p className="text-yellow-400">{isMetric ? 'F' : 'C'}</p>
        </div>
        <div className="w-full py-4 px-7 mb-10 flex justify-between rounded-full glassEffect">
          <p>Theme</p>
          <p className="text-yellow-400">Dark</p>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
