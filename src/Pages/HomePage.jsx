import { TiLocation } from 'react-icons/ti';
import Forecast from '../components/Forecast';
import Temperature from '../components/Temperature';

const HomePage = () => {
  return (
    <div className="w-full">
      <header className="fixed px-6 py-4 w-full">
        <p className="text-gray-400 text-xs">22,Feb 2022</p>
        <div className="text-[0.7rem] pt-1 flex items-center">
          <div className="flex items-center">
            <TiLocation className="-mt-[2px]" />
            <p className="pl-1">ISlAMABAD, </p>
            <p className="text-gray-500 pl-1">Pakistan</p>
          </div>
        </div>
      </header>
      <section>
        <Temperature />
      </section>
      <section>
        <Forecast />
        <Forecast />
      </section>
      <div className="h-14"></div>
    </div>
  );
};

export default HomePage;
