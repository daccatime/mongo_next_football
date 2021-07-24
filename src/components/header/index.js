import Link  from 'next/link';


function Header (){
    return(
    <div className = "text-right">
<div className="relative h-64 m-8 overflow-hidden rounded-lg bg-red-500">
  <div className="absolute z-30 flex w-full h-full">
    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 className="text-5xl text-left ">Planet Anfield</h2>
      <span></span>
    </div>
    <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-red-600"></div>
      <div className="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          className="absolute inset-y-0 z-20 h-full text-red-600"
        >
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
        >
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>
  <div className="absolute top-0 right-0 block w-7/12 h-full">
    <img
      alt="Snowy mountain lake"
      className="object-cover w-full h-full"
      src="https://e3.365dm.com/21/04/1600x900/skynews-bill-shankly-statue_5349546.jpg?bypass-service-worker&20210420162950"
    />
  </div>
</div>
   
    
    </div>
    
  
    )
}

export default Header