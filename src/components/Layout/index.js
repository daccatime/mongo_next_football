import Header from "../header";
import Footer from "../footer";

import Dashboard from  "../Utils/TransactionDashboard";




function Layout ({children}) {
    return (
        <div>
            <Header/> 
            
          
            {children}
       
        <Footer/>
       
</div>



)}



export default Layout