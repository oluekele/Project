import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const DropdownMenu = () => {
  return (
    <>
      
      <div className="absolute w-[200px] h-[200px] bg-white text-black flex-col gap-3 border-[1px] border-black/30 z-0 mt-2 -ml-10 py-6 px-4 rounded-[6px]  overflow-hidden font-[400] ">
      <ul>
        <li className="flex items-center gap-4 pt-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 1</li>
        <li className="flex items-center gap-4 pt-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 2</li>
        <li className="flex items-center gap-4 pt-4 -ml-[50px] transition ease-in-out delay-150  hover:translate-x-[50px] duration-300 hover:text-[#f45745]"><span><MdOutlineHorizontalRule size={30}/></span>Home 3</li>
        
      </ul>
    </div>

    </>
    
    
  );
};

export default DropdownMenu;