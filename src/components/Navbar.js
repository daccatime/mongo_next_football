import React, { useState } from 'react';
import Link from 'next/link';


const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    
    <nav className="flex items-center  justify-between flex-wrap p-6  bg-gray-100  ">
  <div className="flex items-center flex-shrink-0 bg-red-600 text-white mr-6">
    <h2>Planet Anfield</h2>

  </div>
  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2 border rounded text-teal-200 bg-gray-300 border-teal-400 hover:text-white hover:border-white"
    onClick={() => toggleExpansion(!isExpanded)}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center   lg:w-auto`}>
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white">
        test
      </a>

    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
  )
}

export default Navigation
