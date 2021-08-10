import Link  from 'next/link';


function Footer (){
    return(
     
  <div className="bg-black text-white  p-8 text-font-body">
   
   <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                    <div>
                            <h3 className="hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold uppercase dark:text-white ">About</h3>
                            <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
                                <span className="block mt-2 text-sm  dark:text-gray-400 hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold ">things we do </span>
                            </Link>
                        </div>

                        <div>
                            <h3 className="hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold uppercase dark:text-white ">Blog</h3>
                            <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
                                <span className="block mt-2 text-sm  dark:text-gray-400 hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold ">Blog = Gosip</span>
                            </Link>
                        </div>

                        <div>
                            <h3 className="hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold uppercase dark:text-white ">Resources</h3>
                            <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
                                <span className="block mt-2 text-sm  dark:text-gray-400 hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold ">other great places to visit</span>
                            </Link>
                        </div>

                        <div>
                        

                           
                            <div>
                            <h3 className="hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold uppercase dark:text-white ">Contact</h3>
                            <Link className='mr-5 hover:text-gray-900 hover:text-bold text-white '  href='/'passHref >
                                <span className="block mt-2 text-sm  dark:text-gray-400 hover:underline cursor-pointer text-white hover:text-red-600   hover:text-bold ">John@planetanfield.com</span>
                            </Link>
                        </div>
                          
                        </div>
                    </div>
                </div>

     <div>
        <p className=" py-8 text-center text-white dark:text-white">© Brand 2020 - All rights reserved</p>
     </div>
  </div>

   

    )
}

export default Footer