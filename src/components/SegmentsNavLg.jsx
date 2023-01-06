import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const SegmentsNavLg = () => {
  return (
    <nav className="h-full hidden lg:flex text-gray-600 fixed top-0 left-0">
      <ul className="h-full flex py-6 flex-col px-6 text-xl items-center justify-evenly ">
        <NavLink to="/" activeClassName="segment-link" exact>
          <li className="p-1.5 text-2xl cursor-pointer">
            <RiHome2Line />
          </li>
        </NavLink>
        <NavLink to="/search" activeClassName="segment-link">
          <li className="p-1.5 text-2xl cursor-pointer">
            <RiSearchLine />
          </li>
        </NavLink>
        <NavLink to="/explore" activeClassName="segment-link">
          <li className="p-1.5 text-2xl cursor-pointer">
            <MdOutlineExplore />
          </li>
        </NavLink>
        <NavLink to="/setting" activeClassName="segment-link">
          <li className="p-1.5 text-2xl cursor-pointer">
            <IoSettingsOutline />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SegmentsNavLg;
