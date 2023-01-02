import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

const SegmentsNavLg = () => {
  return (
    <nav className="h-full bg-neutral-900 hidden lg:flex text-gray-600 fixed top-0 left-0">
      <ul className="h-full flex py-6 flex-col px-6 text-xl items-center justify-evenly ">
        <li className="p-1.5 text-2xl text-white cursor-pointer">
          <RiHome2Line />
        </li>
        <li className="p-1.5 text-2xl cursor-pointer">
          <RiSearchLine />
        </li>
        <li className="p-1.5 text-2xl cursor-pointer">
          <MdOutlineExplore />
        </li>
        <li className="p-1.5 text-2xl cursor-pointer">
          <RxAvatar />
        </li>
      </ul>
    </nav>
  );
};

export default SegmentsNavLg;
