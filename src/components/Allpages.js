import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";

const Allpages = () => {
  return (
    
    <div className="absolute w-[630px] h-[400px] bg-white text-black border-[1px] border-black/30 z-0 mt-11 -ml-[200px]  py-6 px-4 rounded-[6px]  overflow-hidden flex items-center justify-between">
      <div className='flex-col overflow-hidden w-[250px] -ml-[50px] font-[400]'>
        <ul>
          <li className="flex items-center z-10  gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 1</li>
          <li className="flex items-center gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 2</li>
          <li className="flex items-center gap-4 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 3</li>
          <li className="flex items-center gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>About Us</li>
          <li className="flex items-center gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Our Team</li>
          <li className="flex items-center gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Join Us</li>
          <li className="flex items-center gap-4  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Testimonials</li>
        </ul>
      </div>
      <div className='flex-col overflow-hidden w-[200px] -ml-[50px] font-[400]'>
        <ul>
          <li className="flex items-center gap-4  transition ease-in-out -ml-10 delay-150 hover:translate-x-[50px] hover:flex duration-300  pt-4 hover:text-[#f45745] "><span><MdOutlineHorizontalRule size={30} className='overflow-hidden' /></span>Contact Us</li>
          <li className="flex items-center gap-4 -ml-10  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Sign Up</li>
          <li className="flex items-center gap-4 -ml-10   transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Sign In</li>
          <li className="flex items-center gap-4 -ml-10  transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>News 1</li>
          <li className="flex items-center gap-4 -ml-10   transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>News 2</li>
          <li className="flex items-center gap-4 -ml-10   transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>News 3</li>
          <li className="flex items-center gap-4 -ml-10   transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>News Details</li>
        </ul>
      </div>
      <div className='flex-col overflow-hidden w-[200px] -ml-[50px] font-[400]'>
        <ul>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150 hover:translate-x-[50px] hover:flex duration-300  pt-4  hover:text-[#f45745] "><span><MdOutlineHorizontalRule size={30} className='overflow-hidden' /></span>Game 1</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game 2</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game 3</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game Details</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Style Guide</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Changelog</li>
          <li className="flex items-center gap-4 -ml-10 transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Coming Soon</li>
        </ul>
      </div>
    
    </div>
  
  )
}

export default Allpages