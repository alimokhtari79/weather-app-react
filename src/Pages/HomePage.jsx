import { TiLocation } from 'react-icons/ti';
import SegmentsNav from '../components/SegmentsNav';
import TemperatureAndDetail from '../components/TemperatureAndDetail';

const HomePage = () => {
  return (
    <div className="w-full">
      <header className="fixed p-6">
        <p className="text-gray-400 text-xs">22,Feb 2022</p>
        <div className="text-[0.7rem] pt-1 flex items-center">
          <TiLocation className="-mt-[2px]" />
          <p className="pl-1">ISlAMABAD, </p>
          <p className="text-gray-500 pl-1">Pakistan</p>
        </div>
      </header>
      <TemperatureAndDetail />
      <SegmentsNav />
    </div>
  );
};

export default HomePage;
