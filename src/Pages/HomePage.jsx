import Forecast from '../components/Forecast';
import Temperature from '../components/Temperature';
import TimeAndLocation from '../components/TimeAndLocation';

const HomePage = ({ weather, units }) => {
  console.log(weather);
  return (
    <div className="w-full">
      {weather && (
        <>
          <header className="fixed px-6 py-4 w-full">
            <TimeAndLocation weather={weather} />
          </header>
          <section>
            <Temperature weather={weather} />
          </section>
          <section>
            <Forecast items={weather.hourly} weather={weather} units={units} />
            <Forecast items={weather.daily} weather={weather} units={units} />
          </section>
        </>
      )}
      <div className="h-14"></div>
    </div>
  );
};

export default HomePage;
