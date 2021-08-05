import React, { useState } from "react";
import { Button } from './Button';
import Link from 'next/link';
import Image from "next/image";
import Dropdown from './Dropdown';
  import { Menu } from '@headlessui/react'

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
          <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    
          <Link className='mr-5 hover:text-gray-900'  href='/'passHref >
              Home
            </Link>

            <span className="ml-3 ">x</span>

            <Link className='ml-3  hover:text-gray-900'   href='/services' passHref   onClick={closeMobileMenu}> 
            <span className="ml-3 ">About</span>
              </Link>
              <span className="ml-3 "/>
            <Link className=''  href='/services' passHref>
              Contact
            </Link>
          </div>
          
          <ul className={click ? 'flex items-center hidden space-x-8 lg:flex' : 'nav-menu'}>
          
          <li
            className='py-8 '
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className=''
              href='/services'
              
              onClick={closeMobileMenu}>
             Services 
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          
         
        </ul>

  ....


          <Button/>

        </div>
      </div>
    </div>
  );
}