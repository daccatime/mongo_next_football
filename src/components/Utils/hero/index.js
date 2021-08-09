import Link  from 'next/link';
import Image from "next/image";

const handleClick = () => setClick(!click); 
import React, { useState } from 'react';



function Hero() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>

      {/* Illustration behind hero content https://e0.365dm.com/21/05/1600x900/skysports-sadio-mane-liverpool_5377814.jpg?20210511122928 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
      
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
           <span className="text-6xl">The 2021/22 season has started</span> 
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
              <Image
            src= 'https://e0.365dm.com/21/05/1600x900/skysports-sadio-mane-liverpool_5377814.jpg?20210511122928'
            alt="some pic"
            width={1600}
      height={900} />
                 
              </div>
              
            </div>

            {/* Modal */}
           

          </div>

        </div>

      </div>
    </section>
  );
}


export default Hero