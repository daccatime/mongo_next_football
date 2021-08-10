import Link  from 'next/link';
import Image from "next/image";

const handleClick = () => setClick(!click); 
import React, { useState } from 'react';



function Hero() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>


        

         

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
              <Image
            src= 'https://e0.365dm.com/21/05/1600x900/skysports-sadio-mane-liverpool_5377814.jpg?20210511122928'
            alt="some pic"
            width={2100}
      height={1200} />
                 
              </div>
              
            </div>

            {/* Modal */}
           

          </div>

        

    </section>
  );
}


export default Hero