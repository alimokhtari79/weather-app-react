import Forecast from '../components/Forecast';
import Temperature from '../components/Temperature';
import TimeAndLocation from '../components/TimeAndLocation';
import { motion } from 'framer-motion';

const HomePage = ({ weather, units }) => {
  console.log(weather);
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default HomePage;
