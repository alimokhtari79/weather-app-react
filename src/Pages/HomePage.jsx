import Temperature from '../components/Temperature';
import TimeAndLocation from '../components/TimeAndLocation';
import { motion } from 'framer-motion';
import Forecasts from './../components/Forecasts';
import Loading from '../components/Loading';

const HomePage = ({ weather, units }) => {
  console.log(weather);
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {weather ? (
        <>
          <header className="fixed px-6 py-4 w-full">
            <TimeAndLocation weather={weather} />
          </header>
          <section>
            <Temperature weather={weather} />
          </section>
          <section>
            <Forecasts
              title="Hourly"
              items={weather.hourly}
              weather={weather}
              units={units}
            />
            <Forecasts
              title="Daily"
              items={weather.daily}
              weather={weather}
              units={units}
            />
          </section>
        </>
      ) : (
        <Loading />
      )}
      <div className="h-14"></div>
    </motion.div>
  );
};

export default HomePage;
