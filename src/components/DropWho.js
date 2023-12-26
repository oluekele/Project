import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";

const DropWho = () => {
  return (
    <>
      <div className="absolute w-[250px] h-[350px] bg-white text-black flex-col gap-3 border-[1px] border-black/30 z-0 mt-2 -ml-10 py-6 px-4 rounded-[6px]  overflow-hidden font-[400]">
      <ul className='flex-col items-center justify-between'>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>About Us</li>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Our Team</li>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Testimonials</li>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>FAQ</li>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Join Us</li>
        <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Contact Us</li>
        
      </ul>
    </div>
    </>
  )
}

export default DropWho