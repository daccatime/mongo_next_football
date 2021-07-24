import Link  from 'next/link';


function Header (){
    return(
    <div className = "center">
    <header>
           <div className=" p-4 m-4 bg-red-600 justify-center">

            <h1 className="text-6xl font-bold justify-center text-white">Planet Anfield - Header</h1>

            <ui className = "text-white  justify-centre ">
                <li>
                  <Link href= "/">
                  <a className = ""> Home</a> 
                  </Link>
                </li>
                <li>
                  <Link href= "/">
                  <a className = ""> About</a> 
                  </Link>
                </li>
                
            </ui>
        </div>
    </header>
   
         
</div>
    )
}

export default Header