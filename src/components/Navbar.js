import React, { useState } from "react";
import { Button } from './Button';
import Link from 'next/link';
import Image from "next/image";
import Dropdown from './Dropdown';
  import { Menu } from '@headlessui/react'
import NavDropdown from "./Utils/Navdropdown";

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (



    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <div className="text-3xl font-bold">Planet Anfield</div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline:none focus:outline-none block md:hidden"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className={isOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path
                  className={!isOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row w-screen justify-between px-3 py-4 md:py-0 items-center gap-4`}
        >

<div style={{ position: "relative", height: "50%" }} onClick={handleClick}>
          <Image
            src= 'https://i0.wp.com/fontlot.com/wp-content/uploads/2020/05/liverpool-fc-crest-i85392.jpg?w=474&ssl=1'
            alt="some pic"
            width={50}
      height={50} />
        </div>
          <div className="md:ml-auto flex flex-wrap items-left    text-base justify-left">
    
          <Link className='mr-5 hover:text-gray-900 hover:text-bold '  href='/'passHref >
          <span className="ml-5 px-5 py-5 cursor-pointer  hover:text-red-600   hover:font-bold ">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900   hover:font-bold'  href='/'passHref >
          <span className="ml-5 px-5 py-5  cursor-pointer  ">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
          <span className="ml-5 px-5 py-5">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
          <span className="ml-5 px-5 py-5">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
          <span className="ml-5 px-5 py-5  cursor-pointer  ">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
          <span className="ml-5 px-5 py-5">Home</span>
            </Link>

            <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
          <span className="ml-5 px-5 py-5">Home</span>
            </Link>

            
          </div>
         

  
        <NavDropdown className=""/> 


          <Button/>

        </div>
      </div>
    </div>
  );
}