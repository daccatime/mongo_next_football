import React, { useState } from 'react';
import Link from 'next/link';


const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    
    <nav className="flex items-center  justify-between flex-wrap p-6  bg-black text-font-body ">
  <div className="flex items-center flex-shrink-0 bg-red-600 text-white mr-6 text-font-body">
   

  </div>
  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2 border rounded text-white bg-black border-teal-400 
    hover:text-white hover:border-white"
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
    <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
          <span className="block text-font-body text-bold mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4 2xl">Home</span>
      </Link>
      <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
          <span className="block text-font-body text-bold mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">Dashboard</span>
      </Link>
      
      <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
          <span className="block text-font-body text-bold mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">History</span>
      </Link>
      <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
          <span className="block text-font-body text-bold mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">Anfield </span>
      </Link>

      <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
          <span className="block text-font-body text-bold mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4">About Us</span>
      </Link>

    </div>
    
  </div>
</nav>
  )
}

export default Navigation
