import React from 'react';
import { TbBrandWebflow } from "react-icons/tb";
import { GiOden } from "react-icons/gi";

const Footer = () => {
  return (
    <div className=' lg:flex items-center justify-between mx-auto h-[200px] w-full max-w-[1520px] px-4 py-4 '>
      <div className='my-4  lg:hidden mx-6'>
          <button className='text-[14px] py-1 cursor-pointer  border-[1px] border-solid border-gray-500/60 mx-2 rounded-full px-4 hover:bg-[#f45745] hover:text-white hover:border-none' >Facebook</button>
          <button className='text-[14px] py-1 cursor-pointer  border-[1px] border-solid border-gray-500/60 mx-2 rounded-full px-4 hover:bg-[#f45745] hover:text-white hover:border-none' >YouTube</button>
          <button className='text-[14px] py-1 cursor-pointer  border-[1px] border-solid border-gray-500/60 mx-2 rounded-full px-4 hover:bg-[#f45745] hover:text-white hover:border-none'>EpicGames</button>
      
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex-col lg:w-[700px]  text-[12px] lg:text-[18px]'>
          <p>&#169; Metaverse Jam &#183; All Rights Reserved 2024. <span className='cursor-pointer hover:text-[#f45745]'>Licensing</span></p>
          <p><span className='cursor-pointer hover:text-[#f45745]'>Template</span> by <span className='cursor-pointer hover:text-[#f45745]'>wCopilot Powered</span> by <span className='cursor-pointer hover:text-[#f45745]'>Webflow</span></p>
        </div>

        

        <div className='mt-4 hidden lg:flex'>
          <button className='text-[15px] cursor-pointer  border-[1px] border-solid border-gray-500/60 py-[3px] mx-2 rounded-full px-4 hover:text-[#f45745] hover:border-[#f45745]' >Facebook</button>
          <button className='text-[15px] cursor-pointer  border-[1px] border-solid border-gray-500/60 py-[3px] mx-2 rounded-full px-4 hover:text-[#f45745] hover:border-[#f45745]' >YouTube</button>
          <button className='text-[15px] cursor-pointer  border-[1px] border-solid border-gray-500/60 py-[3px] mx-2 rounded-full px-4 hover:text-[#f45745] hover:border-[#f45745]'>EpicGames</button>
      
        </div>
      </div>
      
      <div className='lg:flex flex-col gap-4 my-4 lg:right-[3%] text-[14px] fixed right-[8%] bottom-4'>
        <button className='flex items-center gap-2 py-[6px] rounded-[4px] bg-blue-800 border-none px-2 text-white cursor-pointer '><TbBrandWebflow className='rounded-[2px] bg-[#fff] text-[#5a08c7] p-[4px]' size={20}/> Buy this Template</button>
        <button className='flex items-center border-[1px] gap-2 py-[6px] rounded-[4px]  text-[#33338b] bg-white px-  cursor-pointer '><GiOden size={20}  className='bg-[#06061d96] text-[#f5abce] rounded-[2px] py-[4px]'/> All Templates</button>
      </div>
    </div>
  )
}

export default Footer