import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

const SegmentsNav = () => {
  return (
    <nav className="w-full lg:hidden text-gray-400 fixed bottom-0">
      <ul className="w-full flex py-6 text-xl justify-evenly">
        <li className="p-1.5 cursor-pointer">
          <RiHome2Line />
        </li>
        <li className="p-1.5 cursor-pointer">
          <RiSearchLine />
        </li>
        <li className="p-1.5 cursor-pointer">
          <MdOutlineExplore />
        </li>
        <li className="p-1.5 cursor-pointer">
          <RxAvatar />
        </li>
      </ul>
    </nav>
  );
};

export default SegmentsNav;
