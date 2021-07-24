import Header from "../header";
import Footer from "../footer";



function Layout ({children}) {
    return (
        <div>
            <Header/>
            {children}
          
<div className="text-blue mr-3 ml-4 mt-4 mb-2  border-blue px-2 sm:px-3 md:px-10 lg:px-0 xl:pl-10 w-full border lg:w-10-12 xl:w-8/12"/>   
     

  <div className="p-4 m-4 bg-red-600">
            <h2 className="text-2xl font-bold text-white">Tmp layout </h2>
        </div> 
        <Footer/>
</div>



)}


export default Layout