import React from 'react';

const Navbar = ({currentPage,setCurrentPage}) => {
      return (
            <div>
            <ul className='flex items-center gap-10 '>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >Comedy</li>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >Action</li>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >Adult</li>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >Animation</li>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >
                        <button className='w-full h-full' onClick={()=>setCurrentPage(currentPage - 1)}>
                              Prev
                        </button>
                  </li>
                  <li className='border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ' >
                        <button className='w-full h-full' onClick={()=>setCurrentPage(currentPage + 1)}>
                              Next
                        </button>
                  </li>
            </ul>      
            </div>
      );
};

export default Navbar;