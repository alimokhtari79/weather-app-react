import { RiSearchLine } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import Header from '../components/Header';

const SearchPage = () => {
  return (
    <div className="search-container p-6">
      <Header title="search for city" />
      <div className="search-input-container w-full flex items-center my-6 h-12 bg-[#1f1f21] rounded-full">
        <RiSearchLine className="ml-4 text-xl text-gray-300" />
        <input
          type="text"
          className="w-full h-full bg-transparent rounded-full outline-none text-sm px-3 placeholder:text-sm placeholder:text-gray-500 text-neutral-600"
          placeholder="Search"
        />
        <BiX className="mr-4 text-xs text-gray-300" />
      </div>
      <div className="flex flex-col justify-center items-center text-slate-400 my-10">
        <SlLocationPin className="text-6xl lg:text-8xl" />
        <p className="text-sm lg:text-lg mt-4">search by location</p>
      </div>
    </div>
  );
};

export default SearchPage;
