import Header from "../header";
import Footer from "../footer";

import Dashboard from  "../TransactionDashboard";



function Layout ({children}) {
    return (
        <div>
            <Header/>  
            <Dashboard/>
            {children}
       
        <Footer/>
       
</div>



)}



export default Layout