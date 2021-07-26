import Link  from 'next/link';


function Footer (){
    return(
      <footer className="flex flex-col  justify-between relative  m-8 overflow-hidden rounded-lg  bg-black  text-red-600 bottom-0 p-6">
        
      <p className="font-bold mt-1">Yours Truly</p>
      <p>(JAM Stack Engineer)</p>
    </footer>
   

    )
}

export default Footer