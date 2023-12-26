import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";

const Game = () => {
  return (
    <>
    <div className="absolute w-[250px] h-[250px] bg-white text-black flex-col gap-3 border-[1px] border-black/30 z-0 mt-2 -ml-10 py-6 px-4 rounded-[6px]  overflow-hidden font-[400]">
    <ul className='flex-col items-center justify-between'>
      <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game 1</li>
      <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game 2</li>
      <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game 3</li>
      <li className="flex items-center gap-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 pt-4 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Game Details</li>
      
      
    </ul>
  </div>
  </>
  )
}

export default Game