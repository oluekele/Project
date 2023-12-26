import React from 'react';
import { ImSpinner3 } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMenuRight } from "react-icons/cg";
import DropDown from "./DropDown";
import { useState } from 'react';
import DropWho from './DropWho';
import Game from './Game';
import News from './News';
import Allpages from './Allpages';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const [isDropVisible, setDropVisible] = useState(false);

  const handleMouseEnter2 = () => {
    setDropVisible(true);
  };

  const handleMouseLeave2 = () => {
    setDropVisible(false);
  };
  const [isGameVisible, setGameVisible] = useState(false);

  const handleMouseEnter3 = () => {
    setGameVisible(true);
  };

  const handleMouseLeave3 = () => {
    setGameVisible(false);
  };
  const [isNewsVisible, setNewsVisible] = useState(false);

  const handleMouseEnter4 = () => {
    setNewsVisible(true);
  };

  const handleMouseLeave4 = () => {
    setNewsVisible(false);
  };
  const [isAllpagesVisible, setAllpagesVisible] = useState(false);

  const handleMouseEnter5 = () => {
    setAllpagesVisible(true);
  };

  const handleMouseLeave5 = () => {
    setAllpagesVisible(false);
  };
  return (
    <div className='w-full flex items-center justify-center z-[99] mt-[15px]'>
       <div className='w-[90%]  h-[67px] max-w-[1520px] z-[99] bg-[#0a0413] px-3 mx-auto lg:w-[850px] flex text-white justify-between items-center rounded-[16px] '>
      <div className='flex gap-4 lg:hidden'>
       <ImSpinner3 size={40} className='bg-[#f45745] h-[50px] w-[50px] text-black rounded-[8px] p-1'/>
        <div className=' relative'>
          <HiOutlineShoppingBag size={40} className='bg-white cursor-pointer w-[60px] text-black h-[50px] rounded-[8px] py-2 px-4'  />
          <span className='absolute text-[12px] text-[red] font-bold z-10 left-[26px] top-[20px]'>0</span>
        </div>
      
      </div>
      <div className='items-center gap-5 hidden lg:flex'>
      <ImSpinner3 size={40} className='bg-[#f45745] h-[50px] w-[50px] text-black rounded-[8px] p-1'/>
        <div className='cursor-pointer text-[22px] z-[99] py-2 h-[50px] font-bold hover:text-[#f45745] hover:flex-col relative' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Demos
          {isDropdownVisible && <DropDown  />}
        </div>
        <div className='hover:flex-col relative py-2  cursor-pointer text-[22px] font-bold hover:text-[#f45745]' onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}>Who We Are 
            {isDropVisible && <DropWho  />}
          </div>
        <div className='hover:flex-col relative py-2 cursor-pointer text-[22px] font-bold hover:text-[#f45745]' onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}>Games
            {isGameVisible && <Game />}
          </div>
        <div className='hover:flex-col relative py-2 cursor-pointer text-[22px] font-bold hover:text-[#f45745]' onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}>News
            {isNewsVisible && <News />}
        </div>
        <div className='hover:flex  relative py-2 cursor-pointer text-[22px] font-bold hover:text-[#f45745]' onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}>All Pages
            {isAllpagesVisible && <Allpages />}
        </div>
        <div className='flex items-center justify-center gap-3 '>
          <div className=' relative'>
            <HiOutlineShoppingBag size={40} className='bg-white cursor-pointer w-[60px] text-black h-[50px] rounded-[8px] py-2 px-4'  />
            <span className='absolute text-[12px] text-[red] font-bold z-10 left-[26px] top-[20px]  '>0</span>
          </div>
          <button className='bg-white w-[150px] cursor-pointer text-[22px] text-black h-[50px] rounded-[8px] hover:bg-[#f45745] border-[2px] border-gray-100/50 outline-none'>Start for Free</button>
      </div>
      </div>
      
      
      <div>
      <CgMenuRight size={40} className='flex lg:hidden cursor-pointer'/>
      </div>
    </div>
    </div>
   
  )
}

export default Header