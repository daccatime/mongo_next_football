import Header from "../header";
import Footer from "../footer";

import Dashboard from  "../Utils/TransactionDashboard";
import Hero from "../Hero";




function Layout ({children}) {
    return (
        <div>
            <Header/> 
          <Hero/>  
          
            {children}
       
        <Footer/>
       
</div>



)}



export default Layout