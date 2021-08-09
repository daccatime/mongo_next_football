import Link  from 'next/link';


function Footer (){
    return(
     
  <div className="bg-gray-300 text-white  p-8">
   
   <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                          </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tech</a>
                           
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AAAA</a>
                                       </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                           
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                        </div>
                    </div>
                </div>

     <div>
        <p className="text-center text-gray-800 dark:text-white">© Brand 2020 - All rights reserved</p>
     </div>
  </div>

   

    )
}

export default Footer