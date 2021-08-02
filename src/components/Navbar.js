import React, { useState } from 'react';
import { Button } from './Button';

import Link from 'next/link'
import Image from "next/image";
import Dropdown from './Dropdown';

function Navbar() {
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
    <>
       
      <nav className='navbar'>
              
        <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        
        </div>

       
        <div style={{ position: "relative", height: "50%" }} onClick={handleClick}>
          <Image
            src= '/hero.jpg'
            alt="some pic"
            width={50}
      height={50}
            
          />
        </div>
     
        <div style={{ position: "relative", height: "50%" }} onClick={handleClick}>
          <Image
            src= 'https://i0.wp.com/fontlot.com/wp-content/uploads/2020/05/liverpool-fc-crest-i85392.jpg?w=474&ssl=1'
            alt="some pic"
            width={50}
      height={50}
            
          />
        </div>



        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className=' py-8 text-red-600  hover:shadow-lg'>
            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='py-8 text-red-600  hover:shadow-lg'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              href='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             servics 
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='py-8   text-red-600  hover:shadow-lg'>
            <Link
              href='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
         
        </ul>
       
      <Button/>
      </nav>
    </>
  );
}

export default Navbar;